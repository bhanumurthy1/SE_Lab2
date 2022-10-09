import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav class=" bg-primary">
     
      
      <ol class="container-fluid header-list-container">
      <li class="m-3">
          <Link to="/" class=" list-item ">
            <h2>User Profile</h2> 
          </Link>
        </li> 
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class=" m-3">
        <Link to="/news" class=" list-item ">
            <h2>Live News</h2>
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <li class=" m-3">
          <Link to="/sum" class=" list-item ">
            <h2>Addition</h2>
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <li class=" m-3">
          <Link to="/samplegetapi" class=" list-item ">
            <h2>SampleGetAPI</h2>
          </Link>
        </li>
        
      </ol>
    </nav>
  );
};

export default Header;
