import { useState } from "react";

import "./style.css";

type RandomButtonProps = {
  children: React.ReactNode;
};

export function RandomButton({ children }: RandomButtonProps) {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [hasMoved, setHasMoved] = useState(false);

  const moveButton = () => {
    setHasMoved(true); // mark that the button has started moving

    const maxX = window.innerWidth - 120; // subtract button width
    const maxY = window.innerHeight - 50; // subtract button height

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setPosition({ top: `${newY}px`, left: `${newX}px` });
  };

  return (
    <button
      className="act-button"
      onMouseEnter={moveButton}
      style={{
        position: hasMoved ? "absolute" : "static",
        top: hasMoved ? position.top : "auto",
        left: hasMoved ? position.left : "auto",
        transition: "all 0.2s ease",
        transform: hasMoved ? "translate(-50%, -50%)" : "none",
      }}
    >
      {children}
    </button>
  );
}
