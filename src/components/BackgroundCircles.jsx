import { useState } from "react";
import { useEffect } from "react";

export default function BackgroundCircles() {
  const [circles, setCircles] = useState([]);
  useEffect(() => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    const newCircles = [];

    for (let i = 0; i < 10; i++) {
      const size = Math.random() * 100 + 50;
      const posY = Math.random() * window.innerHeight;
      const posX = Math.random() * window.innerWidth;
      const color = colors[Math.floor(Math.random() * colors.length)];

      newCircles.push({ size, posY, posX, color });
    }
    setCircles(newCircles);
  }, []);
  return (
    <div className="background">
      {circles.map((circle, index) => (
        <div
          key={index}
          className="circle"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.posY,
            left: circle.posX,
            backgroundColor: circle.color,
          }}
        ></div>
      ))}
    </div>
  );
}
