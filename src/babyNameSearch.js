import { useState } from "react";

const BabyNameSearch = ({ setSearchNames }) => {
  return (
    <div>
      <input
        type="search"
        id="gsearch"
        name="gsearch"
        onChange={(e) => setSearchNames(e.target.value)}
      />
    </div>
  );
};

export default BabyNameSearch;
