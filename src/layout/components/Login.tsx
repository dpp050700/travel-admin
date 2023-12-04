import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LoginFormPage, ProFormText } from "@ant-design/pro-components";
import { message } from "antd";
import { useLoginStore } from "@stores/index";
import { userLogin } from "@services/auth";


const Login = () => {
  const { setIsLogin, setToken } = useLoginStore();
  const navigate = useNavigate();
  const onFinish = (values: any) => {

    userLogin(values).then((res) => {
      message.success("登录成功");
      setIsLogin(true)
      setToken(res.jwtToken)
      navigate("/", { replace: true });
    })
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        onFinish={onFinish as any}
        title="Travel-Admin"
      >
        <ProFormText
          name="email"
          fieldProps={{
            size: "large",
            prefix: <UserOutlined className={"prefixIcon"} />,
          }}
          placeholder={"用户名"}
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
          initialValue={'kooksee@163.com'}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined className={"prefixIcon"} />,
          }}
          placeholder={"密码"}
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
          initialValue={'123456'}
        />

        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <a
            style={{
              float: "right",
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default Login;
