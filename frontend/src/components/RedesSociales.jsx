import './RedesSociales.css';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function RedesSociales() {
    return (
        <div className="social-links">
            <a
                href="https://www.facebook.com/share/1BivUywzSJ"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
            >
                <FaFacebook size={20} />
            </a>
            <a
                href="https://wa.me/+53 53686161"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="WhatsApp"
            >
                <FaWhatsapp size={20} />
            </a>
        </div>
    )
}