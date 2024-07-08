"use client";
import { useEffect, useState } from "react";
import { getRandomDimensions, getRandomAnimation } from "../utils/utils";
import { fetchHuemintPalette } from "../utils/colorUtils";
import { getRandomPosition } from "@/utils/positionUtils";

interface Dimensions {
  width: number;
  height: number;
}

interface Position {
  top: number;
  left: number;
}

export default function Home() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });
  const [animation, setAnimation] = useState<string>("");
  const [colors, setColors] = useState<string[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    const { width, height } = getRandomDimensions(5, 900);
    setDimensions({ width, height });
    const randomAnimation = getRandomAnimation();
    setAnimation(randomAnimation);
    console.log(randomAnimation);

    // Fetch color palette
    fetchHuemintPalette().then(setColors);

    // Generate random positions
    const newPositions = Array.from({ length: 6 }, () => getRandomPosition());
    setPositions(newPositions);
  }, []);

  return (
    <div className="bg-black h-screen relative">
      {colors.length > 0 && positions.length > 0 && (
        <>
          {colors.map((color, index) => (
            <div
              key={index}
              className={`fixed rounded-full blur-3xl ${animation}`}
              style={{
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
                backgroundColor: color,
                top: `${positions[index].top}px`,
                left: `${positions[index].left}px`,
              }}
            ></div>
          ))}
        </>
      )}
    </div>
  );
}
