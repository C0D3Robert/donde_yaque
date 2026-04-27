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
                <FaFacebook size={30} />
            </a>
            <a
                href="http://whatsapp.com/channel/0029Vb7j65r9RZAPeTOUtq11"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="WhatsApp"
            >
                <FaWhatsapp size={34} />
            </a>
        </div>
    )
}