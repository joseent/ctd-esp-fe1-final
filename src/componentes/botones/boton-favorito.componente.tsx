import './boton-favorito.css';
import { useAppDispatch } from "../../redux/hooks";
import {toggleFavorite} from '../../reducers/characterGallery'
import {Character} from '../../reducers/characterGallery'

interface BotonFavoritoProps {
    favorite: number;
    esFavorito: boolean;
    characterStore: Character;
  }

/**

Componente que muestra un botón que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo.

@param {Object} props - Las propiedades del componente.

@param {number} props.favorite - El id del personaje que se desea marcar como favorito.

@param {boolean} props.esFavorito - Indica si el personaje es favorito o no.

@param {Object} props.characterStore - El objeto que representa al personaje.

@returns {JSX.Element} - Retorna un elemento JSX que representa el botón de favorito.
*/

const BotonFavorito = ({ favorite, esFavorito, characterStore }: BotonFavoritoProps) => {

    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    const dispatch = useAppDispatch();

    /**
    Función que maneja el evento onClick del botón de favorito.
    Hace el dispatch de la acción toggleFavorite con el personaje como argumento.
    @param {Object} character - El objeto que representa al personaje.
    */

    const handleToggleFavorite = (character: Character) => {
        dispatch(toggleFavorite(character));
    };
    return <div className="boton-favorito" onClick={()=> handleToggleFavorite(characterStore)}  >
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;