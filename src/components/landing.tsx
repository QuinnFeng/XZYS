import { useState } from "react";
import { images } from "../util/const";
import { CurrentZodiac } from "./currentZodiac";
import { Footer } from "./footer";
import { ZodiacList } from "./zodiacList";
import { ZoidacsProvider } from "./zodiacsProvider";
import { SignUp } from "./signup";
import { LogIn } from "./login";

export const Landing = () => {
  const [tab, setTab] = useState("main");

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
          <div className="auth">
            <span onClick={() => setTab("signIn")}>登录</span>
            <span>|</span>
            <span onClick={() => setTab("signUp")}>注册</span>
          </div>
        </section>
        {(() => {
          switch (tab) {
            case "main":
              return (
                <ZoidacsProvider>
                  <CurrentZodiac />
                  <hr className="separator" />
                  <ZodiacList />
                </ZoidacsProvider>
              );
            case "signIn":
              return <LogIn />;
            default:
              return <SignUp />;
          }
        })()}
        <Footer />
      </div>
    </>
  );
};
