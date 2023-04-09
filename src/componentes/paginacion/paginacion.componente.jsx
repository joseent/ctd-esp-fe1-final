import './paginacion.css';
import { useState, useEffect } from "react";

import { getCharacters } from "../../reducers/characterGallery";
import { useAppDispatch } from "../../redux/hooks";

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */

const Paginacion = ({prev, next, page}) => {

    return <div className="paginacion">
        <button disabled={page > 1 ? false : true} className={"primary"} onClick = {prev}>Anterior</button>
        <button disabled={false} className={"primary"} onClick = {next}>Siguiente</button>
    </div>
}

export default Paginacion;