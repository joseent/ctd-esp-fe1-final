import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { useAppSelector } from "../../redux/hooks";
import {Character} from '../../reducers/characterGallery'


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * @param {Object} props - Propiedades del componente
 * @param {Character} props.character - Objeto que contiene los datos del personaje
 * @returns un JSX element que representa la tarjeta de personaje
 */
const TarjetaPersonaje = ({ character }: { character: Character }) => {
  const favoritos = useAppSelector((state) => state.gallery.favoritesList);
  const esFavorito = favoritos.find(favorito => favorito.id === character.id);


  return (
    <div className="tarjeta-personaje">
      <img src={character.image} alt={character.name} />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito
        favorite={character.id}
        esFavorito={esFavorito? true:false}
        characterStore={character}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
