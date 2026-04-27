import './SobreMi.css';
import { RxScissors } from 'react-icons/rx';
import { BiSolidLayerPlus } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

export default function SobreMi() {
  return (
    <section className="sobre-mi">
      <h2>Sobre Donde Yaque</h2>
      <p>
        En Donde Yaque creamos prendas únicas que fusionan la tradición artesanal con la tendencia de la moda actual. Cada pieza combina técnicas heredadas, diseños modernos y una cuidada atención al detall, logrando un equilibrio entre lo clásico y lo contemporáneo.
        <br />
        <br />
        Trabajamos con pasión y materiales de alta calidad para ofrecer creaciones auténticas, pensadas para quienes buscan estilo, identidad y distinción en cada ocasión.
      </p>
      <div className="grid">
        <div className="grid-item">
            <div className="icons">
                <RxScissors size={30} />
            </div>
            <h3>
                Confección Artesanal
            </h3>
            <p>
                Prendas elaboradas con técnicas tradicionales adaptadas a la moda actual.
            </p>
        </div>
        <div className="grid-item">
            <div className="icons">
                <BiSolidLayerPlus size={30} />
            </div>
            <h3>
                Materiales Premiun
            </h3>
            <p>
                Selección de telas de alta calidad para un acabado moderno y duradero.
            </p>
        </div>
        <div className="grid-item">
            <div className="icons">
                <FaHeart size={30} />
            </div>
            <h3>
                Diseño exclusivo
            </h3>
            <p>
                Creaciones únicas que combinan tradición, estilo y personalidad.
            </p>
        </div>
      </div>
    </section>
  );
}