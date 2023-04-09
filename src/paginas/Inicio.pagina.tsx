import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect, useRef, useState } from "react";
import {
  deleteFavorites,
  getCharacters,
  getFilteredCharacters,
  searchCharacter
} from "../reducers/characterGallery";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

/**
 *
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns {JSX.Element} la pagina de inicio
 */
const PaginaInicio = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.gallery.characters);
  const inputSearch = useAppSelector((state) => state.gallery.inputSearch);
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const [filterSearch, setfilterSearch] = useState<string>(inputSearch);

  /**
 * Ejecuta una búsqueda y actualiza la galería de personajes.
 *
 * @param {string} filterSearch El término de búsqueda para buscar.
 */
    
  useEffect(() => {
    dispatch(searchCharacter(filterSearch));
    dispatch(getFilteredCharacters(filterSearch));
  }, [filterSearch,dispatch]);

   /**
   * Trae los personajes de la página actual y enfoca la entrada de búsqueda.
   */

  useEffect(() => {
    dispatch(getCharacters(page));
    inputSearchRef?.current?.focus();
  }, [page,dispatch]);

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

   /**
   * Borra el filtro de búsqueda actual y restablece la galería de personajes a la primera página.
   * @function clearInputFilter
   */
  const clearInputFilter = () => {
    setfilterSearch("")
    dispatch(deleteFavorites())
    inputSearchRef?.current?.focus();
    dispatch(getCharacters(1))
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={clearInputFilter}>Reiniciar filtro</button>
      </div>
      <Filtros inputSearchRef={inputSearchRef} search={(e: React.ChangeEvent<HTMLInputElement>) => setfilterSearch(e.target.value)} value={filterSearch} />
      <Paginacion prev={handlePrev} next={handleNext} page={page} />
      <GrillaPersonajes characters={characters} />
      <Paginacion prev={handlePrev} next={handleNext} page={page} />
    </div>
  );
};

export default PaginaInicio;
