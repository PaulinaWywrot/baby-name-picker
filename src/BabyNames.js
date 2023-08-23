import SortAscending from "./Sort";

// level 1 props & map method

const BabyNames = ({ searchName, MainList, addToFavourites }) => {
  let filteredNames = MainList.filter((baby) =>
    baby.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="name-container">
      {filteredNames.sort(SortAscending).map((baby) => {
        return (
          <span
            className={baby.sex === "f" ? "baby-girl" : "baby-boy"}
            key={baby.name}
            onClick={() => addToFavourites(baby)}
          >
            {baby.name}
          </span>
        );
      })}
    </div>
  );
};

export default BabyNames;
