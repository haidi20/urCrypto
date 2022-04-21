import React, {useState} from "react";

// components
import Sidebar from "components/Sidebar/Sidebar";
import FooterAdmin from "components/Footers/FooterAdmin";

export default function Admin({ children, title }) {

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 h-screen">
        <div className="flex flex-col h-screen ">
          <div className="relative bg-blueGray-800 p-9">
            <div className="px-4 md:px-10 mx-auto w-full">
              <a
                className="text-white text-lg ml-4 uppercase hidden lg:inline-block font-semibold"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                {title}
              </a>
            </div>
          </div>

          <div className="flex flex-1 px-4 py-5 md:px-10 mx-auto w-full">
            {children}
          </div>

          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
