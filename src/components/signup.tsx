import { FormEvent, FormEventHandler, useState } from "react";
import { userRequests } from "../userapi";
import { user } from "../util/model";
import toast from "react-hot-toast/headless";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: Partial<user> = { name, email, phone, password };
    userRequests
      .createUser(newUser)
      .then(() => toast.success(`注册成功`))
      .then((error) => console.error(error));
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
          <input
            id="phone"
            type="text"
            value={phone}
            placeholder="请输入电话"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="password">密码</label>
          <input
            id="password"
            type="text"
            value={password}
            placeholder="请输入6-20位包含字母和数字的密码"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="submit-button"
          >
            注册
          </button>
        </form>
      </div>
    </section>
  );
};
