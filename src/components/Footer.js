import React from "react";
import FooterCard from "./reusable-ui/FooterCard";
import {
  addressContents,
  careersContents,
  contactContents,
  socialContents,
} from "../utils/enums";

export default function Footer() {
  return (
    <footer className=" py-16 px-5 w-full h-full text-my_white">
      <div className=" w-[1200px] h-full mx-auto p-6">
        <div className=" w-full h-full flex gap-6">
          <div className="space-y-10 pr-20">
            <FooterCard
              title="Contact"
              contents={contactContents}
              className="space-y-4"
            />

            <FooterCard
              title="Careers"
              contents={careersContents}
              className="space-y-4"
            />
            <p className=" text-[#939393] font-light text-[16px] leading-[19.5px] tracking-[-1%]">
              © 2023 Vaultflow. All Rights Reserved.
            </p>
          </div>

          <div className="space-y-10">
            <FooterCard
              title="Address"
              contents={addressContents}
              className="w-[55%] space-y-4"
            />

            <FooterCard
              title="Social"
              contents={socialContents}
              className="space-y-4"
            />
          </div>

          <div className="flex justify-end w-auto min-h-full">
            <div className="w-[180px] h-full flex items-end justify-end gap-[10px] ">
              <img
                src="logo.png"
                alt="Logo"
                className="size-[22px] object-cover object-center"
              />
              <span className=" font-medium text-[22px] leading-[22px] tracking-[-3%]">
                Vaultflow
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
