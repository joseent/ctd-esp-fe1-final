import './boton-favorito.css';
import { useAppDispatch } from "../../redux/hooks";
import {toggleFavorite} from '../../reducers/characterGallery'
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito,onClick}) => {

    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    const dispatch = useAppDispatch();

    const handleToggleFavorite = (favorite) => {
        dispatch(toggleFavorite(favorite));
      };

    return <div className="boton-favorito" onClick={()=> handleToggleFavorite(onClick)}  >
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;