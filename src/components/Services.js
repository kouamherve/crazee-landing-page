import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className=" text-white flex flex-col items-center gap-20 px-5">
      <div className="border-2 border-white w-[472px] py-6 flex flex-col items-center gap-6 ">
        <h2>Features that work for your future.</h2>
        <p>
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </p>
      </div>
      <div className="border-2 border-white w-[1200px] p-[10px] flex flex-col items-center gap-5">
        <div className=" w-full">
          <div className="border-2 border-white w-1/2">
            <span>icon</span>
            <h3>title</h3>
            <p>paragraph</p>
            <Link to="#">Link</Link>
          </div>
        </div>
        <div className=" w-1/2"></div>
      </div>
    </div>
  );
}
