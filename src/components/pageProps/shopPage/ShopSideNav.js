import React from "react";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Color />
    </div>
  );
};

export default ShopSideNav;
