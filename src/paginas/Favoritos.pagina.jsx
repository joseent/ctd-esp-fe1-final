import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import {useAppDispatch,useAppSelector} from '../redux/hooks'
import { deleteFavorites } from "../reducers/characterGallery";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const favorites = useAppSelector((state) => state.gallery.favoritesList);
    const dispatch = useAppDispatch();

    const clearFavorites = (favorites) =>{
        dispatch(deleteFavorites(favorites))
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={()=> clearFavorites(favorites)}>Borrar todo</button>
        </div>
        <GrillaPersonajes characters={favorites} />
    </div>
}

export default PaginaFavoritos