import { useEffect, useState } from "react";
import {
  ChineseConstellationNames,
  ZodiacFortunes,
  getCurrentConstellation,
  zodiacInfo,
} from "../util/const";
import { ZodiacFortune } from "../util/model";
import { numberOfActiveStar, stars } from "../util/util";
import { FaStar } from "react-icons/fa";
import { useZodiacs } from "./zodiacsProvider";

interface CurrentZodiacInterface {
  tab: string;
  setTab: (tab: string) => void;
}

export const CurrentZodiac = ({ tab, setTab }: CurrentZodiacInterface) => {
  const [zodiac, setZodiac] = useState("");
  const { favZodiacs, removeFromFavs } = useZodiacs();

  useEffect(() => {
    setZodiac(ChineseConstellationNames[favZodiacs[0]]);
  }, [favZodiacs]);

  const zodiacToday = ZodiacFortunes[zodiac]?.today as ZodiacFortune["today"];

  return (
    <>
      <section id="curr-zodiac">
        <div className="left">
          <span>
            <img
              src={zodiacInfo[zodiac]?.image}
              alt={zodiac}
            />
          </span>
          <p className="name-date">
            <span className="zodiac-name">{zodiac}</span>
            {zodiacInfo[zodiac]?.date}
          </p>
        </div>
        <div className="right">
          <div className="duration">
            <span
              className={`wrapper ${tab == "today" ? "active" : ""}`}
              onClick={() => setTab("today")}
            >
              今日运势
            </span>
            <span
              className={`wrapper ${tab == "tomorrow" ? "active" : ""}`}
              onClick={() => setTab("tomorrow")}
            >
              明日运势
            </span>
            <span
              className={`wrapper ${tab == "week" ? "active" : ""}`}
              onClick={() => setTab("week")}
            >
              本周运势
            </span>
            <span
              className={`wrapper ${tab == "month" ? "active" : ""}`}
              onClick={() => setTab("month")}
            >
              本月运势
            </span>
            <span
              className={`wrapper ${tab == "year" ? "active" : ""}`}
              onClick={() => setTab("year")}
            >
              今年运势
            </span>
          </div>
          <div className="fortune">
            <span className="rating">
              <span className="rating-title">综合运势:</span>
              <div className="stars">{stars(+zodiacToday?.all)}</div>
            </span>
            <span className="rating">
              <span className="rating-title">爱情运势:</span>
              <div className="stars">{stars(+zodiacToday?.love)}</div>
            </span>
            <span className="rating">
              <span className="rating-title">事业学业:</span>
              <div className="stars">{stars(+zodiacToday?.work)}</div>
            </span>
            <span className="rating">
              <span className="rating-title">财富运势:</span>
              <div className="stars">{stars(+zodiacToday?.money)}</div>
            </span>
            <span className="rating">
              <span className="rating-title">健康指数:</span>
              <span className="white">{+zodiacToday?.health}%</span>
            </span>
          </div>
          <div className="summary">
            <p>
              <span className="rating-title">综合运势:</span>
              <span className="white">
                {zodiacToday?.summary.substring(0, 80)}...
                <a
                  href=""
                  className="pink-bg more"
                >
                  更多详情
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="favs"></div>
      </section>
    </>
  );
};
