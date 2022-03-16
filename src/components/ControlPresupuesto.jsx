import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
    presupuesto, 
    setPresupuesto,
    gastos,
    setGastos,
    setIsValidPresupuesto
}) => {

    const [porcentaje, setPorcentaje] = useState(0);

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        
        const totalDisponible = presupuesto - totalGastado

        //Calcula el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1000);
    }, [gastos]);  

  const formatter = (cantidad) => {
      return cantidad.toLocaleString('de-DE', {
          style: 'currency',
          currency: 'EUR',
      })
  }

  const handleReset = () => {
      const resultado = confirm('¿Desear reiniciar presupuesto y gastos?')
      if (resultado) {
          setGastos([])
          setPresupuesto(0)
          setIsValidPresupuesto(false)
      }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
                })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            
            />
        </div>
        <div className="contenido-presupuesto">
            <button
                className="reset-app"
                type="button"
                onClick={handleReset}
            >
                Resetear Presupuesto
            </button>
            <p>
                <span>Presupuesto:</span> {formatter(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible:</span> {formatter(disponible)}
            </p>
            <p>
                <span>Gastado:</span> {formatter(gastado)}
            </p>
        </div>
      
    </div>
  )
}

export default ControlPresupuesto
