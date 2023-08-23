import BabyNames from "./BabyNames";
import "./App.css";
import BabyNameSearch from "./babyNameSearch";
import Favourites from "./Favourites";
import { useState } from "react";
import babyNamesData from "./babyNamesData.json";

function App() {
  const [searchName, setSearchName] = useState("");
  const [FavouritesList, setFavouritesList] = useState([]);
  const [MainList, setMainList] = useState(babyNamesData);

  function addToFavourites(baby) {
    setFavouritesList([...FavouritesList, baby]);
    setMainList(MainList.filter((babyName) => babyName.name !== baby.name));
  }
  const removeFromFavourites = (baby) => {
    setMainList([...MainList], baby);
    setFavouritesList(
      FavouritesList.filter((babyName) => babyName.name !== baby.name)
    );
  };

  return (
    <div className="App">
      <BabyNameSearch setSearchNames={setSearchName} />
      <Favourites
        FavouritesList={FavouritesList}
        removeFromFavourites={removeFromFavourites}
      />
      <BabyNames
        searchName={searchName}
        MainList={MainList}
        addToFavourites={addToFavourites}
      />
    </div>
  );
}

export default App;
