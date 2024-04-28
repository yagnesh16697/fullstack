// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

// Create an Auto Suggestion Box in Vanilla JS
// Create a suggestion area bottom to the input box that shows the suggestion list.
// The list is visible when the input box is in focus or when user types, it hides when the input box is blurred
// getSuggestions(text); method will act as mock server and will return random text based on the inputs with 0 - 200 millisceond latency and may fail.
// if a suggestion is clicked, populate the input box with its value and bring input box in focus

(function () {
  const search = document.getElementById("search");
  const results = document.getElementById("results");

  const onFocus = () => {
    results.style.display = "block";
  };

  const onBlur = () => {
    results.style.display = "none";
  };

  const onChange = (e) => {
    processData(e.target.value);
  };

  const onClick = (e) => {
    search.value = e.target.textContent;
    results.innerHTML = "";
    search.focus();
  };

  const processData = async (value) => {
    try {
      if (!value) {
        results.innerHTML = "";
        return;
      }
      const resp = await getSuggestions(value);
      const list = document.createElement("ul");

      if (resp.length > 0) {
        resp.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          li.style.cursor = "pointer";
          list.appendChild(li);
        });
        results.innerHTML = "";
        results.appendChild(list);
      }
    } catch (error) {
      console.log(error);
    }
  };
  search.addEventListener("focus", onFocus);
  window.addEventListener("blur", onBlur);
  search.addEventListener("keyup", onChange);

  results.addEventListener("click", onClick);
})();
