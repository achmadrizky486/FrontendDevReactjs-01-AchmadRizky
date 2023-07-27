import React, { useEffect, useId, useState } from "react";
import Navbar from "./Navbar";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import Loading from "./Molecules/Loading";
import Card from "./Molecules/Card";
import Gmaps from "./Molecules/Gmaps";

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
            <NavLink to="/">All Restaurants </NavLink>
            {">"} {data.nama}
          </p>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="max-w-[1100px] mx-auto h-full">
              <div className="max-w-[1100px] mx-auto h-full grid grid-cols-2">
                <div>
                  <img
                    className="object-cover rounded-sm"
                    src={data.imageUrl}
                    alt="img"
                  />
                </div>
                <div>
                  <p className="text-4xl font-semibold pb-5">{data.nama}</p>
                  <div className="flex my-auto items-center text-center">
                    <p className="text-xl font-semibold pe-3">{data.rating}</p>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={data.rating}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <p className="pt-10">Daftar Menu</p>
              <div className="mx-auto h-full grid grid-cols-4 gap-8 pt-5">
                {review?.map((datum) => {
                  return (
                    <div key={datum.id}>
                      <Card
                        src={datum.imgItemUrl}
                        nama={datum.namaItem}
                        value={datum.ratingItem}
                      />
                      <div className="py-1">{datum.deskripsi}</div>
                    </div>
                  );
                })}
              </div>
              <Gmaps koor={data.koordinat} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
