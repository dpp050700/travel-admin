import { message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "@stores/index";

const AuthRoute = ({ children }: any) => {
  const {isLogin, token} = useLoginStore()
  const navigate = useNavigate();
  

  // useEffect(() => {
  //   if (!token || !isLogin) {
  //     message.error("token 过期，请重新登录!");
  //     navigate("/login");
  //   }
  //   if (token && isLogin) {
  //     if (location.pathname == "/login") {
  //       navigate('/');
  //     } else {
  //       console.log(location.pathname)
  //       navigate(location.pathname);
  //     }
  //   }
  // }, [token, location.pathname]);

  return children;
};

export default AuthRoute;
