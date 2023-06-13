import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  // const [data, setData] = useState([]);

  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem("contactDetails")) || [];
  });

  useEffect(() => {
    localStorage.setItem("contactDetails", JSON.stringify(data));
  }, [data]);

  // localStorage.setItem("details",JSON.stringify(data));

  function addData(item) {
    if (item.name !== "" && item.number !== "") {
      setData([...data, item]);
    }
  }

  function deleteData(ind) {
    // console.log(ind);
    let newData = [...data];
    // console.log(newData);
    newData.splice(ind, 1);
    setData(newData);
  }

  function editData(editData) {
    // console.log(editData);
    let newData = [...data];
    newData[editData.id].name = editData.name;
    newData[editData.id].number = editData.number;
    setData(newData);
  }

  return (
    // <Router>
      <div>
      <Header />
        {/* <Routes> */}
          {/* <Route exact path="/Add" element={<AddContact parentCallback={addData} />}/> */}
          <AddContact parentCallback={addData} />
          
        {/* </Routes> */}
        {data.map((items, i) => (
            <Card
              key={i}
              parentDeleteData={deleteData}
              parentEditData={editData}
              data={items}
              contactIndex={i}
            />
          ))}
      </div>
    // </Router>
  );
}

export default App;
