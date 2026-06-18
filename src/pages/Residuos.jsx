import { useState } from "react";

function Residuos() {
  const [residuos, setResiduos] = useState([]);

  const [nuevo, setNuevo] = useState({
    tipo: "",
    cantidad: "",
    unidad: "kg",
    fecha: "",
  });

  function guardarResiduo() {
    if (!nuevo.tipo || !nuevo.cantidad) return;

    setResiduos([...residuos, nuevo]);

    setNuevo({
      tipo: "",
      cantidad: "",
      unidad: "kg",
      fecha: "",
    });
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>Gestión de Residuos</h1>

      <div
        style={{
          display: "grid",
          gap: 15,
          maxWidth: 500,
          marginTop: 30,
        }}
      >
        <input
          placeholder="Tipo de residuo"
          value={nuevo.tipo}
          onChange={(e) =>
            setNuevo({ ...nuevo, tipo: e.target.value })
          }
        />

        <input
          placeholder="Cantidad"
          value={nuevo.cantidad}
          onChange={(e) =>
            setNuevo({ ...nuevo, cantidad: e.target.value })
          }
        />

        <select
          value={nuevo.unidad}
          onChange={(e) =>
            setNuevo({ ...nuevo, unidad: e.target.value })
          }
        >
          <option>kg</option>
          <option>ton</option>
        </select>

        <input
          type="date"
          value={nuevo.fecha}
          onChange={(e) =>
            setNuevo({ ...nuevo, fecha: e.target.value })
          }
        />

        <button onClick={guardarResiduo}>
          Guardar Residuo
        </button>
      </div>

      <table
        style={{
          marginTop: 40,
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Unidad</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          {residuos.map((r, index) => (
            <tr key={index}>
              <td>{r.tipo}</td>
              <td>{r.cantidad}</td>
              <td>{r.unidad}</td>
              <td>{r.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Residuos;