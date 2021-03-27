import { Layout, Menu, Breadcrumb, Button } from "antd";

import { BsList } from "react-icons/bs";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Filter from "./Filter";


import "./Styles/style.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Slidtable from "./components/Slidtable";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const Index = () => {
  const [show, setshow] = useState(false);
  const showProgrss = () => {
    setInterval(() => {
      setshow(true);
    }, 100);

    return setshow(false);
  };

  return (
    <div>
      <NavBar fun={showProgrss} />
      <Slidtable fun={showProgrss} />
    </div>
  );
};
export default Index;
