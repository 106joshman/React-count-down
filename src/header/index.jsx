import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="wrapper flex justify-between px-5 py-3">
        <div className="logo-text font-bold text-xl">
          <h3> Dev-Guy</h3>
        </div>
        <div className="repo_link">
          <a href="https://github.com/106joshman">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
