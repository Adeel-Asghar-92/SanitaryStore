import { Link } from "react-router-dom";
import BuildingLogo from "../../images/BuildingLogo.jpg";
import Materiallogo from "../../images/Materiallogo.jpg";

import "./navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-transparent ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <img
                  // className="card-img-top"
                  src={Materiallogo}
                  alt=""
                  height="100px"
                />

                {/* <h1 className="text-warning hcolor">Store Mangement</h1> */}
              </Link>
            </li>
            {/*<li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link " to="/add">
                Add User
              </NavLink>
            </li> */}
          </ul>
        </div>
        {/* <button className="btn btn-outline-dark btn-warning">
          <NavLink className="nav-link" to="/course">
            Add User
          </NavLink>
        </button> */}
      </div>
    </nav>
  );
};
export default NavBar;
