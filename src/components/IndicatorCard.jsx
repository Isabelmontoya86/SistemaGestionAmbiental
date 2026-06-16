function IndicatorCard({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        width: "220px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default IndicatorCard;