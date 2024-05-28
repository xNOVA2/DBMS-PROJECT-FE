import "./sidebar.css";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";

function Sidebar() {
  return (
    <div id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon">X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Add Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> View all Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <TbLogout2 className="icon" /> Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
