import "./App.css";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center flex-column App">
      <Header />
      <FilterBar/>
      <TextArea />
    </div>
  );
}

export default App;
