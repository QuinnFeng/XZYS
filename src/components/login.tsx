import { useState } from "react";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section
      id="log-in"
      className="form-section"
    >
      <div className="form-div">
        <p className="title">用户登录</p>
        <form
          action=""
          id="create-user"
          className="common-form"
        >
          <label htmlFor="name">登录邮箱/用户名</label>
          <input
            id="name"
            type="text"
            value={username}
            placeholder="请输入登录邮箱或用户名"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">密码</label>
          <input
            id="password"
            type="text"
            value={password}
            placeholder="请输入密码"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="submit-button"
          >
            登录
          </button>
        </form>
      </div>
    </section>
  );
};
