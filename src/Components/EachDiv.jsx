import axios from "axios";
import React, { useEffect, useState } from "react";
import { checkIfSaved, saveData } from "../Helper/action";



const EachDiv = ({ ele }) => {
  const [save, setSave] = useState(false);

  useEffect(() => {
    checkIfSaved(ele.id, setSave);
  }, [save]);

  return (
    <div key={ele.id} className="EachData">
      <img src={ele.image} className="recipeImg" />
      <p className="recipeTitle">{ele.title}</p>
      <div className="saveBtnDiv">
        <button
          className="saveBtn"
          onClick={() => {
            !save ? saveData(ele, setSave) : alert("Already saved");
          }}
        >
          {save ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default EachDiv;
