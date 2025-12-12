import React from "react";
import data from "../../../public/db.json";
import Home from "@/Components/modules/Home/Home";

function Homes() {
  return (
    <div className="homes">
      {data.homes.slice(0, 6).map((elem) => {
        return <Home key={elem.id} {...elem} />;
      })}
    </div>
  );
}

export default Homes;
