export default function Menu() {
  const menus = ["Features", "Pricing", "About Us"];

  return (
    <div className=" w-fit">
      <ul className=" flex justify-between gap-8">
        {menus.map((menu) => {
          return (
            <nav key={menu} className=" px-3 py-6 text-my_white">
              {menu}
            </nav>
          );
        })}
      </ul>
    </div>
  );
}
