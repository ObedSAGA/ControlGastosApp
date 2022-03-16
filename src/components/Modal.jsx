import { useState, useEffect } from "react";
import Mensaje from './Mensaje';
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ 
  setModal, 
  animarModal, 
  setAnimarModal, 
  guardarNuevoGasto,
  gastoEditar,
  setGastoEditar 
 }) => {

  const [mensaje, setMensaje] = useState('');
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fecha, setFecha] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, [gastoEditar]);

  const handleCerrarModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 300);
  };

  const handleSubmit = e => {
      e.preventDefault();
      if ([nombre, cantidad, categoria].includes("")) {
          setMensaje('Todos los campos son obligatorios')

          return setTimeout(() => {
              setMensaje('')
          }, 3000);
      }
      guardarNuevoGasto({nombre, cantidad, categoria, id, fecha})
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={handleCerrarModal} />
      </div>
      <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        
        <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Concepto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Ejemplo: Cena con amigos"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Ejemplo: 20€"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select 
                name="categoria" 
                id="categoria"
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
          >
            <option value="">--Selecciona una opción--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida y supermecados</option>
            <option value="alquiler">Alquiler y gastos fijos</option>
            <option value="tranferencias">Transferencias y otros</option>
            <option value="ocio">Restaurantes y ocio</option>
            <option value="salud">Salud y seguros</option>
            <option value="suscripciones">Tecnología y suscripciones</option>
          </select>
        </div>
        <input type="submit" value={gastoEditar.nombre ? "Guardar cambios" : "Añadir gasto"} />
      </form>
    </div>
  );
};

export default Modal;
