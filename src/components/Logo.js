import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="w-[138px] h-[22px]">
      <Link to="#">
        <img
          src="./logo-wrapper.png"
          alt="Logo Wrapper"
          className=" w-full h-full object-cover object-center"
        />
      </Link>
    </div>
  );
}
