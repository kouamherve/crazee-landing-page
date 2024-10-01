import React from "react";

export default function FooterCard({ title, contents, className }) {
  return (
    <div className={`${className}`}>
      <h3 className=" font-medium text-[24px] leading-[29.26px] tracking-[-1%]">
        {title}
      </h3>
      <div className=" font-light leading-[21.94px] text-[18px] tracking-[-1%] space-y-[6px] text-white/85">
        <ul>
          {contents.map((content) => {
            return <p key={content.id}>{content.num}</p>;
          })}
        </ul>
      </div>
    </div>
  );
}
