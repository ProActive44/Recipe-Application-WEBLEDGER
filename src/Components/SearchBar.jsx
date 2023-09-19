import React, { useEffect } from "react";

const SearchBar = ({
  search,
  setSearch,
  isSaved,
  changePage,
  handleSearch,
}) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      if (search) {
        handleSearch(search);
      }
    }
  };

  useEffect(() => {
    // Added an event listener to the Enter Key
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [search]);

  return (
    <div className="flexContainer">
      <div className="searchContainer">
        <label htmlFor="searchBar" className="searchLabel">
          Search your favorite recipe
        </label>
        <br />
        <input
          id="searchBar"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="changePage">
        <button className={!isSaved ? "Active" : ""} onClick={changePage}>
          All Recipes
        </button>
        <button className={isSaved ? "Active" : ""} onClick={changePage}>
          Saved
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
