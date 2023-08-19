import BabyNames from "./BabyNames";
import "./App.css";
import BabyNameSearch from "./babyNameSearch";
import { useState } from "react";

function App() {
  const [searchString, setSearchString] = useState("");
  return (
    <div className="App">
      <BabyNameSearch
        onChange={(event) => setSearchString(event.target.value)}
      />
      <BabyNames searchString={searchString} />
    </div>
  );
}

export default App;
