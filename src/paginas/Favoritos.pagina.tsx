import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import {useAppDispatch,useAppSelector} from '../redux/hooks'
import { deleteFavorites } from "../reducers/characterGallery";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns {JSX.Element} la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const favorites = useAppSelector((state) => state.gallery.favoritesList);
    const dispatch = useAppDispatch();

    /**
     * Borra todos los personajes de la lista de favoritos
     * @param favorites - Lista de personajes favoritos
     */

    const clearFavorites = () =>{
        dispatch(deleteFavorites())
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={()=> clearFavorites()}>Borrar todo</button>
        </div>
        <GrillaPersonajes characters={favorites} />
    </div>
}

export default PaginaFavoritos