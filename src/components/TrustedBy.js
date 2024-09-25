import React from "react";

export default function TrustedBy() {
  const logos = [
    {
      id: 0,
      name: "Dell",
      imageSrc: "./logoDell.png",
    },
    {
      id: 1,
      name: "Zendesk",
      imageSrc: "./logoZendesk.png",
    },
    {
      id: 2,
      name: "Rakuten",
      imageSrc: "./logoRakuten.png",
    },
    {
      id: 3,
      name: "Pacific Funds",
      imageSrc: "./logoPacificFunds.png",
    },
    {
      id: 4,
      name: "NCR",
      imageSrc: "./logoNcr.png",
    },
    {
      id: 5,
      name: "Lattice",
      imageSrc: "./logoLattice.png",
    },
    {
      id: 6,
      name: "TED",
      imageSrc: "./logoTed.png",
    },
  ];
  return (
    <div className=" border border-blue-500 py-[60px] px-5 flex flex-col items-center gap-10">
      <p className=" text-white border border-white">
        Trusted by teams at over 1,000 of the world’s leading organizations
      </p>
      <div className=" w-full flex border border-yellow-500 ">
        {logos.map((logo) => {
          return (
            <img src={logo.imageSrc} alt={logo.name} className=" w-10 h-6" />
          );
        })}
      </div>
    </div>
  );
}
