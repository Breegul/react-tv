import {NavLink, Outlet} from 'react-router-dom';

function Nav() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
        <NavLink to="/search" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Search</NavLink>
        <NavLink to="/shows" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Shows</NavLink>
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Nav
