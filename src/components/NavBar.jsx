import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/stars">Stars</NavLink>
        </li>
        <li>
          <NavLink to="/nebulae">Nebulae</NavLink>
        </li>
        <li>
          <NavLink to="/galaxies">Galaxies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
