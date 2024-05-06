import "./App.css";
import useDocumentTitle from "./hooks/useDocumentTitle";
import Debounce from "./problems/Debounce";
import useToggle from "./hooks/useToggle";
import usePreferredLanguage from "./hooks/usePreferredLanguage";
import useFavicon from "./hooks/useFavicon";

function App() {
  useDocumentTitle("Document Title");
  const [on, setOn] = useToggle(false);

  const lang = usePreferredLanguage();

  useFavicon("https://usehooks.com/favicon.png");
  const onClickChangeState = () => {
    setOn(!on);
  };

  return (
    <div className="App">
      <button onClick={onClickChangeState}>Change State</button>
      <h1>{+on}</h1>
      <Debounce />
      <h1>{lang}</h1>
    </div>
  );
}

export default App;
