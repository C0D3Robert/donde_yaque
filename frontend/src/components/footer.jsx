import './footer.css';
import RedesSociales from '../components/RedesSociales';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";
import Logo from '../assets/logo.jpg';

export default function footer() {
    return (
        <footer className=''>
            <div className='grid'>
                <div className="grid-item">
                    <h2 className='logotipo'>
                        <div className=''>
                            <img src={Logo} alt="Logo" className='logo' />
                        </div>
                        Donde Yaque
                    </h2>
                    <p>
                        Confeccionamos elegancia. Moda artesanal con atención al detalle y materiales de la más alta calidad.
                    </p>
                    <RedesSociales />
                </div>
                <div className="grid-item">
                    <h3>
                        Contacto
                    </h3>
                    <div className="iconos">
                        <div className="flex">
                            <FaWhatsapp size={30} />
                            <div>
                                <p>Whatsapp</p>
                                <p>+53 53686161</p>
                            </div>
                        </div>
                        <div className="flex">
                            <FiPhone size={30} />
                            <div>
                                <p>Teléfono</p>
                                <p>+53 53686161</p>
                            </div>
                        </div>
                        <div className="flex">
                            <TiLocationOutline size={30} />
                            <div>
                                <p>Ciudad</p>
                                <p>Santiago de Cuba</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <h3>
                        Navegación
                    </h3>
                </div>
                <div className="grid-item">
                    <h3>
                        Sitios de interés
                    </h3>
                    <ul>
                        <li><a href="">Sobre Nosotros</a></li>
                        <li><a href="">Cuidado de prendas</a></li>
                        <li><a href="">Guía de tallas</a></li>
                        <li><a href="">Preguntas frecuentes</a></li>
                    </ul>
                </div>
            </div>
            <div className='derechos'>
                <p>© 2026 Donde Yaque. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};