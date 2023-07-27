import React from "react";
import { Audio } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <div className="max-w-[1100px] mx-auto grid justify-center my-auto content-center h-[500px]">
        <Audio
          color="blue"
          height="80"
          width="80"
          radius="9"
          ariaLabel="loading"
        />
      </div>
    </div>
  );
};

export default Loading;
