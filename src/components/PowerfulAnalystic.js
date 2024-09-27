import React from "react";
import Button from "./reusable-ui/Button";

export default function PowerfulAnalystic() {
  return (
    <div className=" py-[60px] px-5 border border-b border-[#0B0121] w-full flex flex-col items-center">
      <div className=" w-[1200px] p-[60px] complete-shadow flex items-center justify-center">
        <div className=" w-[768px] flex flex-col items-center gap-6 text-center">
          <h3 className=" text-[48px] leading-[57.6px] font-bold text-my_white">
            {" "}
            Our powerful analytics provides invaluable insights.
          </h3>
          <p className=" text-lg leading-[27px] text-my_white/90">
            Unlock the power of data with our cutting-edge analytics product.
            Get instant insights with our user-friendly Analytics Dashboard, and
            take advantage of our innovative digital credit tokens to reward
            your customers and incentivize engagement.{" "}
          </p>
          <Button
            label="Download the app"
            className="px-6 py-3 border bg-transparent border-my_white text-[#F2F4F8] rounded-[60px] text-base"
          />
        </div>
      </div>
    </div>
  );
}
