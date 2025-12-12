import { useRouter } from "next/router";
import data from "../../db.json";

function Home() {
  const route = useRouter();
  const home = data.homes.find((elem) => elem.id === +route.query.id);

  return (
    <div className="home-details">
      <div className="home-details-top">
        <div className="home-img">
          <img src={home?.img} alt={home?.title} />
        </div>
        <div className="home-interduce">
          <div className="home-title">
            <h1>
              <span>فروشگاه مجازی ماکسیما</span>
              <span>{home?.price.toLocaleString()} تومان</span>
            </h1>
            <div className="tags">
              <span className="tag green-tag">ویژه</span>
              <span className="tag brown-tag">برای اجاره</span>
            </div>
            <div className="adrress">{home?.address}</div>
          </div>
          <div className="home-review">
            <div className="home-review-top">
              <h2>مرور کلی</h2>
              <p className="">
                <span>کد ملک : </span>
                <span>{home?.code}</span>
              </p>
            </div>
            <ul className="home-review-bottom">
              <li>
                <span>نوع ملک: </span>
                <span>{home?.title}</span>
              </li>
              <li>
                <span>اتاق: </span>
                <span>{home?.roomCount}</span>
              </li>
              <li>
                <span> متراژ: </span>
                <span>{home?.meterage}</span>
              </li>
              <li>
                <span>سال ساخت: </span>
                <span>{home?.year}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home-details-bottom">
        <div className="home-details-description">
          <p className="">توضیحات</p>
          <p className="">{home?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
