import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <div className="nav">
      <h1>Math Magicians</h1>
      <ul>
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

export default Header;
