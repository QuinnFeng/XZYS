import { useEffect, useState } from "react";
import {
  ZodiacFortunes,
  getCurrentConstellation,
  zodiacInfo,
} from "../util/const";
import { ZodiacFortune } from "../util/model";
import { numberOfActiveStar, stars } from "../util/util";
import { FaStar } from "react-icons/fa";

export const CurrentZodiac = () => {
  const [zodiac, setZodiac] = useState("");

  useEffect(() => {
    const fetchZodiac = async () => {
      setZodiac(getCurrentConstellation());
    };
    fetchZodiac();
  }, []);

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
            <span className="wrapper active">今日运势</span>
            <span className="wrapper">明日运势</span>
            <span className="wrapper">本周运势</span>
            <span className="wrapper">今月运势</span>
            <span className="wrapper">今年运势</span>
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
                {zodiacToday?.summary.substring(0, 80)}...[
                <a href="">更多详情</a>]
              </span>
            </p>
          </div>
        </div>
        <div className="favs"></div>
      </section>
    </>
  );
};
