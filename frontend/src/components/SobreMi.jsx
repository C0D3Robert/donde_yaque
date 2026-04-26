import './SobreMi.css';
import { RxScissors } from 'react-icons/rx';
import { BiSolidLayerPlus } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

export default function SobreMi() {
  return (
    <section className="sobre-mi">
      <h2>Sobre Donde Yaque</h2>
      <p>
        En Donde Yaque nos dedicamos a la confección de prendas únicas que combinan elegancia, calidad y atención
      </p>
      <p>
        al detalle. Cada pieza es creada con pasión y los más finos materiales, asegurando que nuestros clientes luzcan
      </p>
      <p>
        excepcionales en cada ocasión.
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
                Cada prenda es confeccionada con técnicas tradicionales y atención al detalle.
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
                Utilizamos solo telas y materiales de la más alta calidad.
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
                Piezas únicas diseñadas para resaltar tu estilo personal.
            </p>
        </div>
      </div>
    </section>
  );
}