import './filtros.css';

interface FiltrosProps {
    inputSearchRef: React.RefObject<HTMLInputElement>;
    search: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  }
  
  /**
   * Componente que muestra los filtros de búsqueda de personajes
   * @param {FiltrosProps} props - Propiedades del componente
   * @returns El componente Filtros
   */
  
  const Filtros = ({inputSearchRef, search, value}: FiltrosProps) => {

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" 
        value={value}
        onChange={search}
        ref={inputSearchRef}
        />
    </div>
}

export default Filtros;