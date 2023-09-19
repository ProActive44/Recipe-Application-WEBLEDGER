import { useEffect, useState } from "react";
import "./App.css";
import AllRecipes from "./Components/AllRecipes";
import SearchBar from "./Components/SearchBar";
import Saved from "./Components/Saved";
import { getData, getSavedData } from "./Helper/action";

function App() {
  const [isSaved, setSaved] = useState(false);
  const [data, setData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [search, setSearch] = useState("");

  const changePage = () => {
    setSaved(!isSaved);
  };

  const handleSearch = (search) => {
    getData(setData, search);
  };

  const handleSavedSearch = (search) => {
    getSavedData(setSavedData, search);
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <SearchBar
        search={search}
        setSearch={setSearch}
        isSaved={isSaved}
        changePage={changePage}
        handleSearch={isSaved ? handleSavedSearch : handleSearch}
      />
      {isSaved ? (
        <Saved data={savedData} getData={handleSavedSearch} />
      ) : (
        <AllRecipes data={data} getData={handleSearch} />
      )}
    </div>
  );
}

export default App;
