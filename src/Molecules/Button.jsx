import React from "react";

const Button = (props) => {
  return (
    <div>
      <div className="w-full h-[40px] bg-blue-900 text-white hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900 hover:cursor-pointer text-xs mt-5 text-center flex items-center justify-center">
        {props.type}
      </div>
    </div>
  );
};

export default Button;
