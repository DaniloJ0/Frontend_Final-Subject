import React from "react";
import logo from "../../img/caduceo.png";
import { useNavigate, Link } from "react-router-dom";
import notificacionOff from "../../img/campana_sin_32.png";
import notificacionOn from "../../img/campana_con_32.png";
import "./styles.css";

export default function SimpleBottomNavigation() {
  const navigate = useNavigate()

  const LogOut = (e) => {
    e.preventDefault();
    
    return navigate('/login')
  }

   return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
      <img src={logo} className="h-8 mr-3" alt="Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        MeTocaFinal
      </span>
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:px-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            aria-current="page"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/citasprogramadas"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:px-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
            Citas programadas
          </Link>
        </li>
        <li>
          <Link
            to="/sacarcita"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:px-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Sacar cita
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block pt-3 pl-3  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:px-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
           <img src={notificacionOff} alt="notificacion" className="w-5 hover-shake" />
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="text-white mt-1 bg-red-200 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={LogOut}
          >
            Salir
          </button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  );
}
