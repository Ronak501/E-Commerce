import React from "react";
import CustomSlider from "../Silder/custom.silder.jsx";

export default function App() {

  const images = [
    {
      imgURL:"./src/assets/pexels-1.jpg",
      imgAlt: "img-1",
    },
    {
      imgURL:"./src/assets/pexels-2.jpg",
      imgAlt: "img-2",
    },
    {
      imgURL:"./src/assets/pexels-3.jpg",
      imgAlt: "img-3",
    },
  ];

  return (
    <div className="mt-10">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    </div>
  );
}