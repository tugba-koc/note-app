import "./App.css";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import AddedNote from "./components/AddedNote";
import { selectItems } from "./redux/note/noteSlice";
import { useSelector } from "react-redux";

function App() {
  const allNotes = useSelector(selectItems);
  return (
    <div className="App">
      <div
        className={`d-flex align-items-center justify-content-center flex-column ${
          allNotes && "vh-100"
        }`}
      >
        <Header />
        <FilterBar />
        <TextArea />
      </div>
      <div className="w-75 d-flex justify-content-start mx-auto">
        {" "}
        {allNotes && <AddedNote />}{" "}
      </div>
    </div>
  );
}

export default App;
