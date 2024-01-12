import { FormEvent, useState } from "react";
import { userRequests } from "../userapi";
import toast, { Toaster } from "react-hot-toast";

interface LogInProps {
  setTab: (tab: string) => void;
}

export const LogIn = ({ setTab }: LogInProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logInHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await userRequests.getUserByNameOrEmail(username);
    console.log(result);
    if (!result) {
      toast.error("该登录邮箱/用户名不存在");
      return;
    } else if (result.password != password) {
      toast.error("密码不正确，请重新输入");
    } else {
      toast.success("登陆成功");
    }
    reset();
  };

  const reset = () => {
    setUsername("");
    setPassword("");
  };

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
          onSubmit={(e) => logInHandler(e)}
        >
          <label htmlFor="username">登录邮箱/用户名</label>
          <input
            id="username"
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
          <div className="center-flex">
            <input
              type="submit"
              className="input-button"
              value="登录"
            />
            <button
              className="forgotten"
              onClick={() => setTab("resetPassword")}
            >
              忘记密码
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
};
