"use client";

import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const nav_list = [
    ["professor", "/professor", "Professor"],
    ["members", "/members", "Members"],
    ["research", "/research", "Research"],
    ["publication", "/publication", "Publication"],
    ["downloads", "/downloads", "Downloads"],
    ["contact", "/contact", "Contact"],
  ];

  console.log(pathname);

  return (
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">
            MCML Group
          </a>
          <button
            className="navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-main"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse" id="navbar-main">
          <ul className="nav navbar-nav navbar-right">
            {nav_list.map((item) => (
              <li
                key={item[0]}
                className={item[1] === pathname ? "active" : ""}
              >
                <a href={item[1]}>{item[2]}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
