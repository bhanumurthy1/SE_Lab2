import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav class=" bg-primary">
      <ul class="container-fluid header-list-container">
        <li class="m-3">
          <Link to="/" class=" list-item ">
            User Profile
          </Link>
        </li>
        <li class=" m-3">
          <Link to="/news" class=" list-item ">
            News
          </Link>
        </li>
        <li class=" m-3">
          <Link to="/sum" class=" list-item ">
            Addition
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
