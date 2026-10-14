import { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import { Link, NavLink } from "react-router";
import { UserContext } from "../context/UserContext";
export const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);
  if (!themeContext) return null;

  const { darkMode, toggleTheme } = themeContext;
  const { user, setUser } = userContext || { user: null, setUser: () => {} };

  return (
    <header className="bg-gray-500 p-3 flex justify-between items-center dark:bg-black">
      <h1 className="text-white font-bold text-4xl">PeliApp</h1>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="flex items-center hover:cursor-pointer border-2 border-white rounded-lg p-1"
        >
          {darkMode ? (
            <MdDarkMode className="text-white text-3xl m-0 p-0" />
          ) : (
            <MdLightMode className="text-white text-3xl"></MdLightMode>
          )}
        </button>
        <NavLink to={'/'} className="text-white hover:underline text-xl">
          Inicio
        </NavLink>
        <NavLink to={'/contact'} className="text-white hover:underline text-xl">
          Contacto
        </NavLink>
        {user ? (
          <button
            onClick={() => setUser(null)}
            className="text-white hover:underline text-xl"
          >
            Cerrar Sesion
          </button>
        ) : (
          <Link to="/login" className="text-white hover:underline text-xl">
            Iniciar Sesion
          </Link>
        )}
      </div>
    </header>
  );
};
