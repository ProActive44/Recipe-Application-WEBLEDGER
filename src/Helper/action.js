import axios from "axios";

let mainUrl = import.meta.env.VITE_API_URL;

export const getData = (setData, search = "") => {
  axios.get(`${mainUrl}/recipes?q=${search}`).then((res) => {
    // axios.get(`${mainUrl}/saved?q=${search}`).then((res) => {
    setData(res.data.data);
  });
};

export const saveData = (ele, setSave) => {
  axios
    .post(`${mainUrl}/saved`, ele)
    .then((res) => setSave(true))
    .catch((err) => err);
};

export const checkIfSaved = (id, setSave) => {
  axios
    .get(`${mainUrl}/saved/${id}`)
    .then((res) => {
      if (res.status === 200) {
        setSave(true);
      }
    })
    .catch((err) => console.log(err));
};

export const getSavedData = (setData, search = "") => {
  axios.get(`${mainUrl}/saved?q=${search}`).then((res) => {
    setData(res.data.data);
  });
};
