import { Link } from "react-router-dom";

export default function Menu() {
  const menus = ["Features", "Pricing", "About Us"];

  return (
    <div className=" w-fit">
      <ul className=" flex justify-between gap-8">
        {menus.map((menu) => {
          return (
            <nav key={menu} className=" px-3 py-6 text-my_white">
              <Link
                to="#"
                className=" hover:text-indigo-300 hover:underline transition duration-200 ease-in-out"
              >
                {menu}
              </Link>
            </nav>
          );
        })}
      </ul>
    </div>
  );
}
