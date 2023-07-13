const SortAscending = (baby1, baby2) => {
  if (baby1.name < baby2.name) {
    return -1;
  } else if (baby1.name > baby2.name) {
    return 1;
  } else {
    return 0;
  }
};
export default SortAscending;
