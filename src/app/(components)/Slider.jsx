import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"; // Import arrow icons

const sliderImages = [
  "/friction_individual achievement.jpg",
  "/lamplighting.jpeg",
  "/Entrance.jpeg",
  "/Vashisht23_Panel Discussion.jpeg",
  "/Vashisht23_Pitch Fest.jpeg",
  "/Vashisht23_Valedictory Prize Distribution by director.jpeg",
  "/Vashisht23_Juniors Edition.jpeg",
  "/Vashisht23_Juniors Science Expo.jpeg",
  "/Vashisht23_Typing Contest With Dean AA.jpeg",
  "/Vashisht23_Valedictory Guest Contentstach CTO Nishant Patel Speech.jpeg",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        maxHeight: "400px",
      }}
    >
      <animated.img
        src={sliderImages[index]}
        alt={`Slider Image ${index}`}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          ...props,
        }}
      />
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <BsArrowLeft size={30} color="#000" />
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <BsArrowRight size={30} color="#000" />
      </button>
    </div>
  );
};

export default ImageSlider;
