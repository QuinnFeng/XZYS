import { useState } from "react";
import { images } from "../util/const";
import { CurrentZodiac } from "./currentZodiac";
import { Footer } from "./footer";
import { ZodiacList } from "./zodiacList";
import { ZoidacsProvider } from "./zodiacsProvider";

export const Landing = () => {
  const [tab, setTab] = useState("today");

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
        <ZoidacsProvider>
          <CurrentZodiac
            tab={tab}
            setTab={setTab}
          />
          <hr className="separator" />
          <ZodiacList />
        </ZoidacsProvider>
        <Footer />
      </div>
    </>
  );
};
