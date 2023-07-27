import React, { useEffect, useId, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";

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
              <div className="max-w-[1100px] mx-auto h-full grid grid-cols-2">
                <div>
                  <img
                    className="object-cover rounded-sm"
                    src={data.imageUrl}
                    alt="img"
                  />
                </div>
                <div>
                  <p>{data.nama}</p>
                  <div className="flex">
                    <p>{data.rating}</p>
                    <Rating
                      style={{ maxWidth: 70 }}
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
                      <img
                        className="rounded-sm"
                        src={datum.imgItemUrl}
                        alt="img"
                      />
                      <p className="py-2">{datum.namaItem}</p>
                      <div className="flex">
                        <p>{datum.rating}</p>
                        <Rating
                          style={{ maxWidth: 70 }}
                          value={datum.ratingItem}
                          readOnly
                        />
                      </div>
                      <div className="py-1">{datum.deskripsi}</div>
                    </div>
                  );
                })}
              </div>
              <div className="pt-8 pb-14">
                <iframe
                  src={data.koordinat}
                  width="1100"
                  height="300"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
