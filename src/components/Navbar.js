import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./reusable-ui/Button";

export default function Navbar() {
  return (
    <div className="w-full h-[102px] pt-7 px-2 flex items-center">
      <div className="flex items-center justify-between w-full h-[72px] px-10 rounded-[25px] bg-[#0B081C80]/50 backdrop-blur-[30px]">
        <Logo />
        <Menu />
        <Button
          label="Download the app"
          className="bg-my_white border border-my_white text-my_dark"
        />
      </div>
    </div>
  );
}
