function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#1f2937",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>🌱 EcoGestión</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "15px" }}>
          Dashboard
        </li>

        <li style={{ marginBottom: "15px" }}>
          Residuos
        </li>

        <li style={{ marginBottom: "15px" }}>
          Gestores
        </li>

        <li style={{ marginBottom: "15px" }}>
          Certificados
        </li>

        <li style={{ marginBottom: "15px" }}>
          Indicadores
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;