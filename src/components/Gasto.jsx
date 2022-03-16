import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../helpers";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img//icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const dicccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  alquiler: IconoCasa,
  tranferencias: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};
const dicccionarioCategorias = {
  ahorro: "Ahorro",
  comida: "Comida y supermecados",
  alquiler: "Alquiler y gastos fijos",
  tranferencias: "Transferencias y otros",
  ocio: "Restaurantes y ocio",
  salud: "Salud y seguros",
  suscripciones: "Tecnología y suscripciones",
};

const Gasto = ({ gasto, setGastoEditar, elminarGasto}) => {
  const { categoria, nombre, cantidad, fecha, id } = gasto;

  const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
    </SwipeAction>
  </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
        onClick={() => elminarGasto(id)}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={dicccionarioIconos[categoria]} alt="Icono Gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{dicccionarioCategorias[categoria]}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agregado el: {""}
                <span>{formatDate(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{cantidad}€</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
