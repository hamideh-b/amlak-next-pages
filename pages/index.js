import Features from "@/Components/templates/Features/Features";
import Gallery from "@/Components/templates/Gallery/Gallery";
import Homes from "@/Components/templates/Homes/Homes";
import Story from "@/Components/templates/Story/Story";
import React from "react";

function index() {
  return (
    <>
      <Features />
      <Story />
      <Homes />
      <Gallery />
    </>
  );
}

export default index;
