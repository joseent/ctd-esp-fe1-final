import './paginacion.css';

/**

Componente que contiene los botones para paginar
@param {Object} props - Propiedades del componente
@param {Function} props.prev - Función que se ejecuta cuando se presiona el botón de página anterior
@param {Function} props.next - Función que se ejecuta cuando se presiona el botón de página siguiente
@param {number} props.page - Número de página actual
@returns un elemento JSX que contiene los botones para paginar
*/

const Paginacion: React.FC<{prev: () => void, next: () => void, page: number}> = ({prev, next, page}) => {

    return <div className="paginacion">
        <button disabled={page > 1 ? false : true} className={"primary"} onClick = {prev}>Anterior</button>
        <button disabled={false} className={"primary"} onClick = {next}>Siguiente</button>
    </div>
}

export default Paginacion;