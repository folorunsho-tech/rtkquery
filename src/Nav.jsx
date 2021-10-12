import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between py-6 md:px-14 px-8 items-center">
      <h2>RTKBlog</h2>
      <button className="bg-gray-900 py-2 px-4 text-white rounded-lg">
        Go to Repo
      </button>
    </nav>
  );
};

export default Nav;
