// highlight section
// popover with next and previous button to move steps
// scroll to element if not in viewport to highlight

const steps = ["3", "header", "footer", "1", "2", "5", "6", "7", "8"];

let index = 0;

const hightlight = (id) => {
  document.getElementById("highlight")?.remove();
  document.getElementById("popover")?.remove();
  const element = document.getElementById(id);
  const elementDimention = element.getBoundingClientRect();
  hightlightHelper(elementDimention);
  popover(elementDimention);
};

const hightlightHelper = (elementDimention) => {
  const top = elementDimention.top;
  const left = elementDimention.left;
  const width = elementDimention.width;
  const height = elementDimention.height;

  let ele = document.createElement("div");
  ele.id = "highlight";
  ele.style = `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    width: ${width - 4}px;
    height: ${height - 4}px;
    transition: border .2s ease;
  `;

  document.getElementById("wrapper").appendChild(ele);

  setTimeout(() => {
    ele.style.border = `4px solid #000`;
  });
};

const popover = (elementDimention) => {
  const bottom = elementDimention.bottom;
  const left = elementDimention.left;
  const right = elementDimention.right;

  const ele = document.createElement("div");

  ele.id = "popover";
  ele.style = `
    position: absolute;
    top: ${bottom + 5}px;
    left: ${(left + right) / 2 - 50}px;
    background: white;
    width: 120px;
    height: 100px;
  `;
  ele.appendChild(navigationButton());
  document.getElementById("wrapper").appendChild(ele);
};

const navigationButton = () => {
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next >";
  nextButton.addEventListener("click", () => {
    if (index < steps.length - 1) {
      index++;
      hightlight(steps[index]);
    }
  });
  const prevButton = document.createElement("button");
  prevButton.textContent = "Prev <";
  prevButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
      hightlight(steps[index]);
    }
  });
  const fragment = document.createDocumentFragment();
  fragment.appendChild(prevButton);
  fragment.appendChild(nextButton);

  return fragment;
};

hightlight(steps[index]);
