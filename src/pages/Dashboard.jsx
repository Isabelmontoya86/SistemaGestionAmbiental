import IndicatorCard from "../components/IndicatorCard";

function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>EcoGestión</h1>
      <p>Plataforma inteligente para gestión ambiental y economía circular.</p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <IndicatorCard
          title="Residuos Gestionados"
          value="125 ton"
        />

        <IndicatorCard
          title="Gestores Activos"
          value="12"
        />

        <IndicatorCard
          title="Certificados"
          value="48"
        />

        <IndicatorCard
          title="Indicadores"
          value="24"
        />
      </div>
    </div>
  );
}

export default Dashboard;