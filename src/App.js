import BabyNames from "./BabyNames";
import BabyNameSearch from "./BabyNameSearch";
import { useState } from "react";
import "./App.css";

function App() {
  /*
                                       App
                                     /      \
          searchString = useState   /        \  searchString = props
                                   /          \
                         BabyNameSearch    BabyNames
        knows search string ^                    ^ needs to know search results
  */

  const [searchString, setSearchString] = useState("");
  return (
    <div className="App">
      <BabyNameSearch onChange={(event)=>setSearchString(event.target.value)}/>
      <BabyNames searchString={searchString}/>
    </div>
  );
}

export default App;
