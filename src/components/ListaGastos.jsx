import Gasto from "./Gasto";

const ListaGastos = ({
  gastos,
  setGastoEditar,
  elminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No hay gastos"}</h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              elminarGasto={elminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay movimientos"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              elminarGasto={elminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListaGastos;
