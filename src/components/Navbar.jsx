import { Link, NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <div className="nav">
      <h1>
        <Link to="/"> Math Magicians</Link>
      </h1>
      <ul className="list">
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/calculator"> Calculator </NavLink>
        </li>
        <li>
          <NavLink to="/quote"> Quote </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
