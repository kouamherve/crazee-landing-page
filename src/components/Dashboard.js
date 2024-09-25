import React from "react";
import Button from "./reusable-ui/Button";

export default function Dashboard() {
  return (
    <section className="  w-[960px] flex flex-col gap-20">
      <div className="flex flex-col items-center pt-[50px]">
        <div className=" text-center flex flex-col gap-6 items-center">
          <Button
            label="We just raised $20M in Series B. Learn more"
            className="bg-transparent border-[1.24px] border-white/30 text-[#F2F4F8]"
          />
          <div className="text-[80px] leading-[5rem] font-medium tracking-tight">
            <p className=" bg-gradient-to-r from-my_white/80 to-my_white/60 inline-block text-transparent bg-clip-text">
              Modern analytics
            </p>
            <p className="bg-gradient-to-r from-my_white/80 to-my_white/30 inline-block text-transparent bg-clip-text">
              for the modern world
            </p>
          </div>
          <p className=" w-[600px] h-[58px] text-lg text-my_white/65">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.{" "}
          </p>
          <div className=" pt-4 flex gap-4">
            <Button
              label="Download the app"
              className="bg-my_white border border-my_white text-my_dark"
            />
            <Button
              label="Talk to an expert"
              className="bg-transparent border border-my_white text-my_white"
            />
          </div>
        </div>
      </div>

      <div className=" w-full h-[472px]">
        <img
          src="./dashboard-image.png"
          alt="Dashboard"
          className=" w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
