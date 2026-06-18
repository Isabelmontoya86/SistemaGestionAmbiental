import {
  FaBell,
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

function Header() {
  return (
    <header
      style={{
        height: "70px",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#F3F4F6",
          padding: "10px 15px",
          borderRadius: "10px",
          width: "320px",
        }}
      >
        <FaSearch />

        <input
          type="text"
          placeholder="Buscar..."
          style={{
            border: "none",
            background: "transparent",
            outline: "none",
            width: "100%",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
          fontSize: "22px",
        }}
      >
        <FaBell />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaUserCircle size={34} />

          <div>
            <strong>Isabel</strong>

            <div
              style={{
                fontSize: "12px",
                color: "#777",
              }}
            >
              Administradora
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;