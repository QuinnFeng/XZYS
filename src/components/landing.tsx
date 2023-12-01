import { images } from "../util/const";
import { CurrentZodiac } from "./currentZodiac";
import { Footer } from "./footer";
import { ZodiacList } from "./zodiacList";

export const Landing = () => {
  return (
    <>
      <div className="container">
        <section
          id="main-header"
          className="header"
        >
          <img
            src={images.logo}
            alt="logo"
            className="logo"
          />
          <div>
            <p className="header-text">聆听星空的密语</p>
          </div>
          <button className="auth"></button>
        </section>
        <CurrentZodiac />
        <hr className="separator" />
        <ZodiacList />
        <Footer />
      </div>
    </>
  );
};
