import React from "react";

export default function Footer() {
  return (
    <footer className=" py-16 px-5 text-my_white">
      <div className=" w-[1200px] mx-auto p-6">
        <div className="border-4 border-blue-500 w-full grid grid-cols-3">
          <div className="border border-white">
            <div className=" border-2 border-yellow-500">
              <h3>Contact</h3>
              <p>Work inquires: work@vaultflow.com</p>
              <p>PR and speaking: press@vaultflow.com</p>
              <p>New business: newbusiness@vaultflow.com</p>
            </div>
            <div className=" border-2 border-yellow-500">
              <h3>Careers</h3>
              <p>Careers@vaultflow.com</p>
              <p>© 2023 Vaultflow. All Rights Reserved.</p>
            </div>
          </div>

          <div className=" border-2 border-green-500">
            <div>
              <h3>Address</h3>
              <p>398 11th Street, Floor 2 San Francisco, CA 94103</p>
            </div>
            <div>
              <h3>Social</h3>
              <ul>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Tik Tok</li>
              </ul>
            </div>
          </div>

          <div className=" border-2 border-red-500">
            <img src="logo-wrapper.png" alt="Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
