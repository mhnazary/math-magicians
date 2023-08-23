import { Link, NavLink } from 'react-router-dom';
import '../index.css';
// import './style.css';

function Navbar() {
  return (
    <div className="nav flex flex-col justify-evently py-4 h-64 pl-4 w-full md:flex md:flex-row md:justify-between md:items-center min-h-fit md:px-16 border border-red-600 md:h-24">
      <h1 className="font-extrabold text-2xl">
        <Link to="/"> Math Magicians</Link>
      </h1>
      <ul className="list text-lg flex flex-col justify-evenly border w-full h-40 mt-4 md:flex md:flex-row md:justify-between  md:h-8 md:mt-0 md:w-1/2 lg:2/5">
        <li className="bg-gray-300 h-12 flex justify-start items-center text-2xl md:bg-white">
          <NavLink className="ml-4" to="/"> Home </NavLink>
        </li>
        <li className="bg-gray-300 h-12 flex justify-start items-center text-2xl md:bg-white">
          <NavLink className="ml-4" to="/calculator"> Calculator </NavLink>
        </li>
        <li className="bg-gray-300 h-12 flex justify-start items-center text-2xl md:bg-white">
          <NavLink className="ml-4" to="/quote"> Quote </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
