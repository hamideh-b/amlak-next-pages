import React from "react";
import data from "../../../db.json";
import Link from "next/link";
function Sidebar() {
  return (
    <div className="sidebar">
      <input
        type="checkbox"
        name="toggle"
        id="sidebar-toggle"
        className="sidebar__input"
      />
      <label htmlFor="sidebar-toggle" className="sidebar__label">
        <div className="sidebar__btn"></div>
      </label>

      <div className="sidebar__bg"></div>
      <ul className="list">
        {data.sidebar.map((elem) => {
          return (
            <li className="list__item" key={elem.id}>
              <Link href={elem.href} className="list__link">
                {elem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
