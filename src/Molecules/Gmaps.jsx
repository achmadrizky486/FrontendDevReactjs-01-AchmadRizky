import React from "react";

const Gmaps = (props) => {
  return (
    <div>
      <div className="pt-8 pb-14">
        <iframe
          src={props.koor}
          width="1100"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Gmaps;
