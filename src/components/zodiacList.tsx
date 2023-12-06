import {
  ChineseConstellationNames,
  ZodiacFortunes,
  formattedChinaDate,
  getCurrentConstellation,
  zodiacInfo,
} from "../util/const";
import { stars } from "../util/util";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CheckMark } from "./checkmark";
import { useEffect } from "react";
import { getCurrentChinaTime } from "../api";
import toast from "react-hot-toast";
import { useZodiacs } from "./zodiacsProvider";

export const ZodiacList = () => {
  const { favZodiacs } = useZodiacs();

  return (
    <>
      <section id="zodiac-list">
        <div className="zodiac-list-header">
          <h3>十二星座今日运势</h3>
          <span>{formattedChinaDate()}</span>
        </div>
        <div className="zodiacs">
          {ChineseConstellationNames.map((z, index) => (
            <div
              key={index}
              className={`zodiac ${index % 3 == 2 ? "" : "fade-right-border"}`}
            >
              <span
                className={`check ${favZodiacs.includes(index) ? "on" : ""}`}
              >
                <CheckMark index={index} />
              </span>
              <div className="zodiac-img-container">
                <img
                  src={zodiacInfo[z]?.image}
                  alt={z}
                  className="zodiac-img"
                />
              </div>
              <div className="zodiac-today">
                <div className="top">
                  <p>{z}</p>
                  <span className="pink-bg">{zodiacInfo[z]?.date}</span>
                </div>
                <span className="rating">
                  <span className="zodiac-all">整体运势:</span>
                  <div className="stars">
                    {stars(+ZodiacFortunes[z]?.today.all)}
                  </div>
                </span>
                <span className="">
                  {ZodiacFortunes[z]?.today.summary.substring(0, 25)}...[
                  <a
                    href=""
                    className="pink"
                  >
                    详细
                  </a>
                  ]
                </span>
              </div>
            </div>
          ))}
        </div>
        <hr className="fade" />
      </section>
    </>
  );
};
