import React from "react";
import { Link } from "react-router-dom";

export default function AnalysticDashboardCard({
  title,
  iconSrc,
  content,
  link,
  className,
  contentClassName,
}) {
  return (
    <div className={`${className} space-y-4`}>
      <div className="size-[50px]">
        <img
          src={iconSrc}
          alt="Analystics Dashboard"
          className=" size-full object-cover object-center"
        />
      </div>
      <h3 className=" text-[32px] leading-[41.6px] tracking-[-0.16px] text-my_white font-medium">
        {title}
      </h3>
      <p
        className={`text-my_white/80 text-sm leading-[21px] ${contentClassName}`}
      >
        {content}
      </p>
      <div className=" pt-4 leading-[24px] text-white font-medium underline underline-offset-2">
        <Link to="#" className=" hover:text-indigo-100">
          {link}
        </Link>
      </div>
    </div>
  );
}
