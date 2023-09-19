import axios from "axios";
import React, { useEffect, useState } from "react";

const saveData = (ele, setSave) => {
  axios
    .post("http://localhost:8080/saved", ele)
    .then((res) => setSave(true))
    .catch((err) => err);
};

const checkIfSaved = (id, setSave) => {
  axios
    .get(`http://localhost:8080/saved/${id}`)
    .then((res) => {
      if (res.status === 200) {
        setSave(true);
      }
    })
    .catch((err) => console.log(err));
};

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
