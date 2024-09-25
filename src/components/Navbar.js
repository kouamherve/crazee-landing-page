import Logo from "./Logo";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-[72px] px-10 rounded-[25px] bg-[#0B081C80]/50">
      <Logo />
      <Menu />
      <div className=" w-fit">
        <button className=" bg-my_white border border-my_white text-my_dark text-sm rounded-3xl px-5 py-2">
          Download the app
        </button>
      </div>
    </div>
  );
}
