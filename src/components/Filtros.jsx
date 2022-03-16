import { useState, useEffect } from "react";

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select 
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
          >
            <option value="">--Todas las categorias--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida y supermecados</option>
            <option value="alquiler">Alquiler y gastos fijos</option>
            <option value="tranferencias">Transferencias y otros</option>
            <option value="ocio">Restaurantes y ocio</option>
            <option value="salud">Salud y seguros</option>
            <option value="suscripciones">Tecnología y suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
