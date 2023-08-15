import { NavLink } from 'react-router-dom';

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
          <NavLink to="/quote"> Home </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
