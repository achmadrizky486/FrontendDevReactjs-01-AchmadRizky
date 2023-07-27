import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://restaurants-df318-default-rtdb.firebaseio.com/restaurants/${id}.json?auth=lwYPGjQq0RKDLzasZVDnO9yS1YMHAngqyB5n14ci`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setReview(data.review);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[1100px] mx-auto h-full py-7">
          <p className="text-xs">
            Restaurant {">"} {data.nama}
          </p>
        </div>
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="max-w-[1100px] mx-auto h-full">
              <img
                className="object-fill rounded-sm"
                src={data.imageUrl}
                alt="img"
              />
              {review?.map((datum) => {
                console.log(datum);
                return (
                  <>
                    <div key={datum.id}>apem</div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
