import React from "react";

export default function Button({ label, className }) {
  return (
    <button
      className={` ${className} text-sm rounded-3xl px-5 py-2 shadow transition duration-200 ease-in-out`}
    >
      {label}
    </button>
  );
}
