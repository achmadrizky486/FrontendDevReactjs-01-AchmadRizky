import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import Navbar from "./Navbar";
import { NavLink, useParams } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://restaurants-df318-default-rtdb.firebaseio.com/restaurants.json?auth=lwYPGjQq0RKDLzasZVDnO9yS1YMHAngqyB5n14ci"
      )
      .then((res) => {
        const output = Object.entries(res.data);
        setData(output);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] border-b-2 mx-auto">
        <div className="max-w-[1100px] mx-auto h-full flex py-3">
          <div className="w-fit px-3 my-auto">Filter By :</div>
          <div className="w-fit px-3 my-auto">
            <input type="radio" name="is_open" id="" className="me-1" />
            Open Now
          </div>
          <div className="w-fit px-3 me-5 border-b-2 my-auto">
            <select name="Price" id="" className="w-full h-full">
              <option value="murah">Termurah</option>
              <option value="mahal">Termahal</option>
            </select>
          </div>
          <div className="w-fit px-3 border-b-2 my-auto">Categories</div>
          <div className="ml-auto border px-5 py-1">Clear All</div>
        </div>
      </div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <div className="max-w-[1100px] mx-auto h-full">
            <p className="text-2xl pt-10 pb-8">All Restaurants</p>
            <div className="w-full grid grid-cols-4 gap-8">
              {data.map((datum) => {
                return (
                  <div key={datum[0]}>
                    <img
                      className="object-fill rounded-sm"
                      src={datum[1].imageUrl}
                      alt="img"
                    />
                    <p className="py-1">{datum[1].nama}</p>
                    <Rating
                      style={{ maxWidth: 70 }}
                      value={datum[1].rating}
                      readOnly
                    />
                    <div className="w-full flex">
                      <p className="max-w-[70px] text-[10px] overflow-clip">
                        {datum[1].kategori}
                      </p>
                      <p className="pl-1 text-[10px]">
                        • Rp {datum[1].price} an
                      </p>
                      <div className="ml-auto text-[10px]">
                        {datum[1].isOpen ? (
                          <div>
                            <span className="text-green-500">•</span> OPEN NOW
                          </div>
                        ) : (
                          <div>
                            <span className="text-red-500">•</span> CLOSE
                          </div>
                        )}
                      </div>
                    </div>
                    <NavLink to={`/detail/${datum[0]}`}>
                      <div className="w-full h-[40px] bg-blue-900 text-white hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 hover:cursor-pointer text-xs mt-5 text-center flex items-center justify-center">
                        LEARN MORE
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
            <div className="w-[300px] h-[40px] text-blue-900 border border-blue-900 text-center flex items-center justify-center my-10 mx-auto hover:bg-blue-900 hover:text-white hover:cursor-pointer">
              LOAD MORE
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
