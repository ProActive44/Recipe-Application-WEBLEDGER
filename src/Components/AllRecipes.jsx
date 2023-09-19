import React from "react";
import { useEffect } from "react";
import EachDiv from "./EachDiv";

const AllRecipes = ({ data, getData }) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="AllData">
        {data?.map((ele, idx) => {
          return <EachDiv key={ele.id} ele={ele} />;
        })}
      </div>
    </div>
  );
};

export default AllRecipes;
