import {
  ChineseConstellationNames,
  ZodiacFortunes,
  formattedChinaDate,
  zodiacInfo,
} from "../util/const";
import { stars } from "../util/util";

export const ZodiacList = () => {
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
                  <span>{zodiacInfo[z]?.date}</span>
                </div>
                <span className="rating">
                  <span className="zodiac-all">整体运势:</span>
                  <div className="stars">
                    {stars(+ZodiacFortunes[z]?.today.all)}
                  </div>
                </span>
                <span className="">
                  {ZodiacFortunes[z]?.today.summary.substring(0, 25)}...[
                  <a href="">详细</a>]
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
