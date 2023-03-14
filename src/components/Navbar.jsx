import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <ul className="ulnav">
            <li className="linav">
                <NavLink 
                    to='/' 
                    className={({ isActive }) => (isActive ? 'anav-active' : 'anav-inactive')}>
                    Municiones
                </NavLink>
            </li>
            <li className="linav">
                <NavLink 
                    to='/armaduras' 
                    className={({ isActive }) => (isActive ? 'anav-active' : 'anav-inactive')}>
                    Armaduras
                </NavLink>
            </li>
        </ul>
    )
}

export default Navbar