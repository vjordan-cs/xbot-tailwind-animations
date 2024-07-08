"use client";
import { useEffect, useState } from "react";
import { getRandomDimensions, fetchHuemintPalette } from "../utils/utils";

interface Dimensions {
  width: number;
  height: number;
}

export default function Home() {
  const [dimensions, setDimensions] = useState<Dimensions[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [blendModesList, setBlendModesList] = useState<string[]>([]);

  useEffect(() => {
    fetchHuemintPalette().then((palette) => {
      // Ensure there are exactly 6 colors
      const paletteColors = palette.slice(0, 6);
      setColors(paletteColors);
      console.log("Palette Colors:", paletteColors);

      // Generate random dimensions, animations, and blend modes
      const newDimensions = Array.from({ length: 6 }, () =>
        getRandomDimensions(400, 2000)
      );
      setDimensions(newDimensions);
    });
  }, []);

  return (
    <div className="bg-gray-900 h-screen relative">
      {colors.length > 0 && dimensions.length > 0 && (
        <>
          {colors.map((color, index) => {
            return (
              <div
                key={index}
                className={`fixed rounded-full blur-3xl mix-blend-difference`}
                style={{
                  width: `${dimensions[index].width}px`,
                  height: `${dimensions[index].height}px`,
                  backgroundColor: color,
                  top: `${
                    Math.random() *
                    (window.innerHeight - dimensions[index].height)
                  }px`,
                  left: `${
                    Math.random() *
                    (window.innerWidth - dimensions[index].width)
                  }px`,
                }}
              ></div>
            );
          })}
        </>
      )}
    </div>
  );
}
