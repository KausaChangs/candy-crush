import { useEffect, useState } from "react";
import "./index.css";

const width = 8;
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const checkForColumnOfThree = () => {};
  const createBoard = () => {
    //we are looping through 8*8=64 times because thats the amount of squares we need to make our board
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomNumbersFrom0to5 = [
        Math.floor(Math.random() * candyColors.length),
      ];
      const randomColor = candyColors[randomNumbersFrom0to5];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };

  console.log(currentColorArrangement);

  useEffect(() => {
    createBoard();
  }, []);

  return (
    <div className="app">
      <diV className="game">
        {currentColorArrangement.map((currentCandyColor, index) => (
          <img
            key={index}
            style={{ backgroundColor: currentCandyColor }}
            alt={currentCandyColor}
          />
        ))}
      </diV>
    </div>
  );
};

export default App;
