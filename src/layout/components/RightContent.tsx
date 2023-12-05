import React from "react";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { useLoginStore } from "@stores/index";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

const RightContent: React.FC = () => {
  const { setIsLogin, setToken } = useLoginStore();
  const navigate = useNavigate();
  const logoutHandle = () => {
    navigate("/login");
    setToken(null);
    setIsLogin(false);
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span onClick={logoutHandle}>退出登录</span>,
    },
  ];

  return (
    <Space size={20}>
      <Dropdown menu={{ items }} placement="bottomRight">
        <Avatar src={avatar} style={{ cursor: "pointer" }} />
      </Dropdown>
    </Space>
  );
};

export default RightContent;
