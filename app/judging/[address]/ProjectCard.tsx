"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

export default function ProjectCard({
  projectTitle,
  projectDescription,
  image_src,
}: {
  projectTitle: string;
  projectDescription: string;
  image_src: StaticImageData;
}) {
  const [sliderVal, setSliderVal] = useState(0);

  const handleSlider = (newVal: number[]) => {
    setSliderVal(newVal[0]);
  };

  return (
    <div className="break-words w-full p-4 bg-[#1f1f26] grid grid-cols-12 gap-2 rounded-md">
      {image_src ? (
        <Image
          src={image_src}
          alt="The project's icon"
          width={90}
          height={90}
        ></Image>
      ) : (
        <div className="bg-white w-[90px] h-[90px] rounded-md col-span-2" />
      )}
      <div className="col-span-5">
        <h3 className="font-bold text-lg">{projectTitle}</h3>
        <h4>{projectDescription}</h4>
      </div>
      <div className="col-span-3 self-center w-full">
        <div className="mt-[10px]">
          <Slider
            onValueChange={handleSlider}
            defaultValue={[0]}
            max={100}
            step={1}
          />
          <div className="flex justify-between">
            <p>0</p>
            <p>100</p>
          </div>
        </div>
      </div>
      <p className="col-span-2 self-center justify-self-center mb-[15px] text-lg font-semibold bg-gradient-to-r from-purple-200 to-purple-500 inline-block text-transparent bg-clip-text">{`${sliderVal} Tokens`}</p>
    </div>
  );
}
