import React from "react";

const ButtonWhite = (props) => {
  return (
    <div>
      <div className="w-[300px] h-[40px] text-blue-900 border border-blue-900 text-center flex items-center justify-center my-10 mx-auto hover:bg-blue-900 hover:text-white hover:cursor-pointer">
        {props.type}
      </div>
    </div>
  );
};

export default ButtonWhite;
