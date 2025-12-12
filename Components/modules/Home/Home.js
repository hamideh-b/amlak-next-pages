import Link from "next/link";
import React from "react";
import { FaExpand, FaKey, FaMapMarkerAlt, FaUser } from "react-icons/fa";
function Home({ id, title, roomCount, img, price, meterage, address }) {
  return (
    <div className="card">
      <img src={img} alt="House 6" className="card__img" />
      <h5 className="card__title">{title}</h5>
      <div className="card__details">
        <FaMapMarkerAlt className="card__icon" />
        <p className="card__text">{address}</p>
        <FaUser className="card__icon" />
        <p className="card__text">{roomCount} اتاق</p>
        <FaExpand className="card__icon" />
        <p className="card__text">{meterage} متر مربع</p>
        <FaKey className="card__icon" />
        <p className="card__text">{price.toLocaleString()} تومان</p>
      </div>

      <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
        مشاهده ملک
      </Link>
    </div>
  );
}

export default Home;
