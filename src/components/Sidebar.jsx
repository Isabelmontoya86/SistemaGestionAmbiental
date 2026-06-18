import "../styles/sidebar.css";
import { Link } from "react-router-dom";

import {
 FaChartPie,
 FaRecycle,
 FaIndustry,
 FaFileInvoice,
 FaChartLine,
 FaLeaf,
 FaRobot
} from "react-icons/fa";

function Sidebar(){

    return(

        <aside className="sidebar">

            <h2 className="logo">
                <span>Eco</span>Gestión
            </h2>

            <p className="subtitle">
                Plataforma Inteligente
            </p>

            <nav className="menu">

                <Link to="/">
                    <FaChartPie/>
                    Dashboard
                </Link>

                <Link to="/residuos">
                    <FaRecycle/>
                    Residuos
                </Link>

                <Link to="/gestores">
                    <FaIndustry/>
                    Gestores
                </Link>

                <Link to="/certificados">
                    <FaFileInvoice/>
                    Certificados
                </Link>

                <Link to="/indicadores">
                    <FaChartLine/>
                    Indicadores
                </Link>

                <Link to="/economia-circular">
                    <FaLeaf/>
                    Economía Circular
                </Link>

                <Link to="/ia">
                    <FaRobot/>
                    IA Ambiental
                </Link>

            </nav>

        </aside>

    );

}

export default Sidebar;