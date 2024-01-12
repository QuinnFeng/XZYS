import { FormEvent, FormEventHandler, useState } from "react";
import { userRequests } from "../userapi";
import { user } from "../util/model";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import parsePhoneNumberFromString, { E164Number } from "libphonenumber-js";
import zh from "react-phone-number-input/locale/zh";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: Partial<user> = { name, email, phone, password };
    userRequests.createUser(newUser).catch((error) => console.error(error));
    resetInputs();
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <section
      id="sign-up"
      className="form-section"
    >
      <div className="form-div">
        <p className="title">用户注册</p>
        <form
          action=""
          id="create-user"
          className="common-form"
          onSubmit={(e) => formSubmitHandler(e)}
        >
          <label htmlFor="name">姓名</label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="请输入姓名"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">注册邮箱</label>
          <input
            id="email"
            type="text"
            value={email}
            placeholder="请输入邮箱"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone">电话</label>
          <PhoneInput
            id="phone"
            country={"CN"}
            value={phone}
            placeholder="请输入电话"
            defaultCountry="CN"
            labels={zh}
            onChange={(e) => setPhone(e!)}
          />
          <label htmlFor="password">密码</label>
          <input
            id="password"
            type="text"
            value={password}
            placeholder="请输入6-20位包含字母和数字的密码"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            className="input-button"
            value="注册"
          />
        </form>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          iconTheme: {
            primary: "blue",
            secondary: "white",
          },
          style: {
            background: "forestgreen",
            color: "whitesmoke",
          },
        }}
      />
    </section>
  );
};
