import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import Navbar from "./Navbar";
import { NavLink, useParams } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import Loading from "./Molecules/Loading";
import Button from "./Molecules/Button";
import ButtonWhite from "./Molecules/ButtonWhite";
import Card from "./Molecules/Card";

const App = () => {
  const [data, setData] = useState([]);
  const [dataKey, setDataKey] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortPrice, setSortPrice] = useState("murah");
  const Change = (e) => {
    setSortPrice(e.target.value);
    setLoading(true);
    console.log("cek data", sortPrice);
  };

  useEffect(() => {
    axios
      .get(
        "https://restaurants-df318-default-rtdb.firebaseio.com/restaurants.json?auth=lwYPGjQq0RKDLzasZVDnO9yS1YMHAngqyB5n14ci"
      )
      .then((res) => {
        const output = Object.entries(res.data);
        const result = Object.values(res.data).flat();
        setData(output);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortPrice]);

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
            <select
              name="price"
              id=""
              className="w-full h-full"
              onChange={Change}
            >
              <option value="murah">Termurah</option>
              <option value="mahal">Termahal</option>
            </select>
          </div>
          <div className="w-fit px-3 border-b-2 my-auto">Categories</div>
          <div className="ml-auto border px-5 py-1 hover:cursor-pointer">
            Clear All
          </div>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="max-w-[1100px] mx-auto h-full">
            <p className="text-2xl pt-10 pb-8">All Restaurants</p>
            <div className="w-full grid grid-cols-4 gap-8">
              {data
                .sort((a, b) =>
                  sortPrice == "murah"
                    ? a.price > b.price
                      ? 1
                      : -1
                    : a.price < b.price
                    ? 1
                    : -1
                )
                .map((datum) => {
                  return (
                    <div key={datum[1].id}>
                      <Card
                        src={datum[1].imageUrl}
                        nama={datum[1].nama}
                        value={datum[1].rating}
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
                        <Button type="LEARN MORE" />
                      </NavLink>
                    </div>
                  );
                })}
            </div>
            <ButtonWhite type="LOAD MORE" />
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
