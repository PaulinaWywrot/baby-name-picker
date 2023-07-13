import babyNamesData from "./babyNamesData.json";
import SortAscending from "./Sort";

const BabyNames = () => {
  return (
    <div className="name-container">
      {babyNamesData.sort(SortAscending).map((baby) => {
        if (baby.sex === "f") {
          return <span className="baby-girl" key={baby.name}>{baby.name}</span>;
        } else {
          return <span className="baby-boy" key={baby.name}>{baby.name}</span>;
        }
      })}
    </div>
  );
};

export default BabyNames;
