import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const getData = () => {
    axios
      .get(
        "https://restaurant-c9992-default-rtdb.firebaseio.com/restaurant.json"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <button onClick={getData}>Get Data</button>
      </div>
    </>
  );
}

export default App;
