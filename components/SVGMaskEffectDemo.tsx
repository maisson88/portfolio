"use client";
import { MaskContainer } from "./ui/svg-mask-effect";  

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden bg-black-200">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold ">
           I am a Frontend Engineer with a passion for creating intuitive and dynamic user interfaces using React.js. With a strong foundation in computer science, having graduated from Suez Canal University, I am skilled in transforming design concepts into responsive and engaging web applications.
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
       I am a <span className="text-red-500">Frontend Engineer </span> with a passion for creating intuitive and dynamic user interfaces using React.js. With a strong foundation in <span className="text-red-500">computer science</span>.
      </MaskContainer>
    </div>
  );
}
