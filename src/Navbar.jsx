import React, { useState } from "react";

const Navbar = () => {
  //   const [nav, setNav] = useState(false);
  //   const handleClick = () => setNav(!nav);
  return (
    <div className="max-w-[1200px] border-b-2 mx-auto">
      <div className="max-w-[1100px] mx-auto flex flex-col justify-center h-full">
        <p className="py-5 text-[30pt]">Restaurants</p>
        <p className="w-[600px] py-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ab
          ducimus atque nemo, assumenda dolorectetur in! Earum quidem ipsum nemo
          perferendis cumque sit obcaecati pariatur ratione. Ipsum harum nulla
          veritatis nam!
        </p>
      </div>
    </div>
  );
};

export default Navbar;
