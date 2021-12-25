import "./App.css";
import React from "react";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import AddedNote from "./components/AddedNote";
import { selectItems } from "./redux/note/noteSlice";
import { useSelector } from "react-redux";

function App() {
  const allNotes = useSelector(selectItems);
  const [search, setSearch] = React.useState("")
  return (
    <div className="App">
      <div
        className={`d-flex align-items-center justify-content-center flex-column ${
          allNotes && "vh-100"
        }`}
      >
        <Header />
        <FilterBar search={search} setSearch={setSearch} />
        <TextArea />
      </div>
      <div className="w-75 d-flex justify-content-start mx-auto">
        {" "}
        {allNotes && <AddedNote search={search} />}{" "}
      </div>
    </div>
  );
}

export default App;
