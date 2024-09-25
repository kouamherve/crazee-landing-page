import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="px-5 pb-20 flex flex-col items-center gap-20">
      <Navbar />
      <Dashboard />
    </header>
  );
}
