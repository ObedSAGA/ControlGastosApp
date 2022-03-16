import {useState} from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ 
  presupuesto, 
  setPresupuesto,
  setIsValidPresupuesto
 }) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
        setMensaje('No es un presupuesto válido');
        return;
    } 

    setMensaje('');
    setIsValidPresupuesto(true);
  };

  const handlePresupuestoChange = (e) => {
    setPresupuesto(Number(e.target.value));
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Define tu presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="0€"
            onChange={handlePresupuestoChange}
          />
        </div>

        <input type="submit" value="Anadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
