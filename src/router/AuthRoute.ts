import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "@stores/index";
import { message } from "antd";

const AuthRoute = ({ children }: any) => {
  const { isLogin, token } = useLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    if ((!token || !isLogin) && location.pathname !== "/login") {
      message.error("token 过期，请重新登录!");
      navigate("/login");
    }
    if (token && isLogin) {
      if (location.pathname == "/login") {
        navigate("/");
      } else {
        // console.log(location.pathname)
        // navigate(location.pathname);
      }
    }
  }, [token, location.pathname]);

  return children;
};

export default AuthRoute;
