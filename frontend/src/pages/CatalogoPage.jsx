import Ract from 'react';
import Titulo from '../components/catalogo/Titulo'
import Catalogo from '../components/catalogo/Catalogo'

const CatalogoPage = () => {
    return(
        <div className="catalogo">
            <Titulo />
            <Catalogo />
        </div>
    )
}

export default CatalogoPage;