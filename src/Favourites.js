const Favourites = ({ FavouritesList, removeFromFavourites }) => {
  return (
    <div>
      <h2>
        Favourites:
        {FavouritesList.length === 0 ? (
          <span>Click a name to add it to your Favourites</span>
        ) : (
          <span></span>
        )}
      </h2>
      <div className="favourites-names">
        {FavouritesList.map((baby) => (
          <span
            key={baby.name}
            onClick={() => {
              removeFromFavourites(baby);
            }}
            className={baby.sex === "f" ? "baby-girl" : "baby-boy"}
          >
            {baby.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Favourites;
