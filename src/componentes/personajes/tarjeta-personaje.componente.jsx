import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { useAppSelector } from "../../redux/hooks";
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

const TarjetaPersonaje = ({ character }) => {
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
        onClick={character}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
