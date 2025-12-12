import React, { useEffect, useState } from "react";
import data from "../../db.json";
import Home from "@/Components/modules/Home/Home";

function Homes() {
  const [home, setHome] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(-1);
  const [page, setPage] = useState(1);
  const pageSize = 3;
  useEffect(() => {
    setPage(1);
  }, [search]);
  useEffect(() => {
    let filteredHome = [...data.homes];
    if (search !== "") {
      filteredHome = data.homes?.filter((elem) => elem.title.includes(search));
    }

    switch (sort) {
      case "price": {
        filteredHome = filteredHome.sort((a, b) => a.price - b.price);
        break;
      }
      case "room": {
        filteredHome = filteredHome.sort((a, b) => a.roomCount - b.roomCount);
        break;
      }
      case "meterage": {
        filteredHome = filteredHome.sort((a, b) => a.meterage - b.meterage);
        break;
      }
      default:
        break;
    }
    const endIndex = page * pageSize;
    const startIndex = endIndex - pageSize;
    const pagination = filteredHome.slice(startIndex, endIndex);
    setHome(pagination);
  }, [search, sort, page]);
  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="-1">انتخاب کنید</option>
            <option value="price">بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس اندازه</option>
          </select>
        </div>
        <div className="home-search">
          <input
            type="text"
            placeholder="جستجو کنید"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="homes">
        {home?.map((elem) => {
          return <Home key={elem.id} {...elem} />;
        })}
        {search && home.length === 0 && (
          <div style={{ fontSize: "25px" }}>
            گزینه ای مرتبط با "{search} " یافت نشد.مجددا امتحان بفرمایید.
          </div>
        )}
      </div>
      <ul className="pagination__list">
        {Array.from({
          length: Math.ceil(
            data.homes.filter((elem) => elem.title.includes(search)).length /
              pageSize
          ),
        }).map((_, index) => (
          <li
            key={index + 1}
            className={`pagination__item ${page === index + 1 ? "active" : ""}`}
            onClick={() => setPage(index + 1)}
          >
            <a href="#">{index + 1}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homes;
