import { useState } from "react";

const width = 8;
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
  const createBoard = () => {
    //we are looping through 8*8=64 times because thats the amount of squares we need to make our board
    for (let i = 0; i < width * width; i++) {
      const randomColors =
        candyColors[Math.floor(Math.random * candyColors.length)];
    }
  };

  return <div></div>;
};

export default App;
