import { memo } from "react";
import { Outlet, useNavigate } from "react-router";
import styles from "./index.module.css";
import { routes } from "../route";
const Layout = () => {
  const navigate = useNavigate();
  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles["layout-wrap"]}>
      <div className={styles["nav-part"]}>
        <header>React Base</header>
        <ul className={styles["nav-content"]}>
          {routes[0].children.map((ele) => {
            return (
              <li key={ele.path} onClick={() => handleNavClick(ele.path)}>
                {ele.path}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles["content-part"]}>
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Layout);
