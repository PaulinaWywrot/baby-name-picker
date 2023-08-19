import BabyNames from "./BabyNames";
import "./App.css";
import BabyNameSearch from "./babyNameSearch";
import { useState } from "react";

function App() {
  const [searchName, setSearchName] = useState("");
  return (
    <div className="App">
      <BabyNameSearch setSearchNames={setSearchName} />
      <BabyNames searchName={searchName} />
    </div>
  );
}

export default App;
