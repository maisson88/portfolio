"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card"

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Maisoon Ahmed Mohamed"
        revealText="Frontend Dveloper React JS "
      >
        <TextRevealCardTitle>
          Something, you need to see.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        I am a Frontend Engineer with a passion for creating intuitive and dynamic user interfaces using React.js. With a strong foundation in computer science, having graduated from Suez Canal University, I am skilled in transforming design concepts into responsive and engaging web applications.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
