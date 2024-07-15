import { NavLink } from "react-router-dom";
import Title from "./Title";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul className="nav-link-ul">
          <li>
            <NavLink to="/" className={"nav-link"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={"nav-link"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={"nav-link"}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={"nav-link"}>
              &#x1F6D2; ({cartItems.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/grocery" className={"nav-link"}>
              Grocery
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={"nav-link"}>
              Online Status:{onlineStatus ? "🟢" : "🔴"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
