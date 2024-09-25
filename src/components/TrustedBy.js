import React from "react";
import { logos } from "../utils/enums";

export default function TrustedBy() {
  return (
    <div className=" py-[60px] px-5 flex flex-col items-center gap-10">
      <p className=" text-white/75 text-xl">
        Trusted by teams at over 1,000 of the world’s leading organizations
      </p>
      <div className=" min-w-full flex justify-center gap-12">
        {logos.map((logo) => {
          return (
            <img
              key={logo.id}
              src={logo.imageSrc}
              alt={logo.name}
              className=" w-fit h-fit object-cover object-center"
            />
          );
        })}
      </div>
    </div>
  );
}
