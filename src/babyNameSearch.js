const BabyNameSearch = ({ setSearchNames }) => {
  return (
    <div>
      <input
        type="search"
        id="gsearch"
        name="gsearch"
        placeholder="Search for a name"
        onChange={(e) => setSearchNames(e.target.value)}
      />
    </div>
  );
};

export default BabyNameSearch;
