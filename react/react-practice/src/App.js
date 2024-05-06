import "./App.css";
import useDocumentTitle from "./hooks/useDocumentTitle";
import Debounce from "./problems/Debounce";

function App() {
  //useDocument Hook
  useDocumentTitle("Document Title");
  return (
    <div className="App">
      <Debounce />
    </div>
  );
}

export default App;
