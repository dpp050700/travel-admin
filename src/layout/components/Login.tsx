import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LoginFormPage, ProFormText } from "@ant-design/pro-components";
import { message } from "antd";
import { useLoginStore } from "@stores/index";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Login = () => {
  const { setUserInfo } = useLoginStore();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    return delay(1000).then(() => {
      message.success("登录成功🎉🎉🎉");
      setUserInfo(values);
      navigate("/", { replace: true });
    });
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
          name="username"
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
