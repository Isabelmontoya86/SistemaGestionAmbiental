import Sidebar from "../components/Sidebar";
import IndicatorCard from "../components/IndicatorCard";

function Dashboard() {
 return (
  <div
    style={{
      display: "flex",
    }}
  >
    <Sidebar />

    <div
      style={{
        padding: "30px",
        flex: 1,
      }}
    >
      <h1
  style={{
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "10px",
    lineHeight: "1.2",
  }}
>
  Sistema de Gestión Ambiental Inteligente
</h1>

      <p>
        Bienvenida a tu plataforma de gestión ambiental.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <IndicatorCard
          title="Residuos Generados"
          value="1250 kg"
        />

        <IndicatorCard
          title="Aprovechamiento"
          value="82%"
        />

        <IndicatorCard
          title="Ingresos"
          value="$4.500.000"
        />
      </div>
    </div>
  </div>
)};

export default Dashboard;