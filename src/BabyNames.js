import babyNamesData from "./babyNamesData.json";

const BabyNames = () => {
  return (
    <div className="name-container">
      {babyNamesData.map((baby) => {
        if (baby.sex === "f") {
          return <span className="baby-girl">{baby.name}</span>;
        } else {
          return <span className="baby-boy">{baby.name}</span>;
        }
      })}
    </div>
  );
};

export default BabyNames;
