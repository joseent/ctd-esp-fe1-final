import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect, useState } from "react";
import {getCharacters} from '../reducers/characterGallery'
import {useAppDispatch,useAppSelector} from '../redux/hooks'

/**
 * 
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.gallery.characters);

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [page]);

  const handlePrev = () =>{
    setPage(page - 1)
  }
  const handleNext = () =>{
    setPage(page + 1)
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros />
      <Paginacion prev={handlePrev} next={handleNext} page={page} />
      <GrillaPersonajes characters={characters}/>
      <Paginacion prev={handlePrev} next={handleNext} page={page} />
    </div>
  );
};

export default PaginaInicio;
