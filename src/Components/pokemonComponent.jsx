import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";

export default function PokemonCard() {
    const [dataList, setDataList] = useState(false);
    const location = useLocation();
    const pokemon = location.state.pokemon;
    const handleShowData = () => setDataList(!dataList);

    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                maxWidth: "300px",
                margin: "20px auto",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center"
            }}
        >
            <button style={{
                position: "absolute",
                marginTop: "-30vh",
                marginLeft: "-40vh",
            }}>

                <Link to="/" > Main PAGE </Link>
            </button>
            <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
                No. {pokemon.id}
            </h1>
            <h2 style={{ fontSize: "26px", color: "#007bff", fontWeight: "bold", marginBottom: "15px" }}>
                {pokemon.name.toUpperCase()}
            </h2>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "10px",
                    border: "2px solid #ccc",
                    marginBottom: "20px"
                }}
            />
            <div id="pokemon-data-component" style={{ padding: "20px" }}>
                <button
                    onClick={handleShowData}
                    style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "25px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                    }}
                    onMouseOver={(e) => {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
                        e.target.style.backgroundColor = "#45a049";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                        e.target.style.backgroundColor = "#4CAF50";
                    }}
                >
                    {dataList ? "Hide Details" : "Show Details"}
                </button>

                {dataList && (
                    <div style={{
                        marginTop: "25px",
                        padding: "20px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "15px",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(5px)"
                    }}>
                        {["Abilities", "Types", "Stats"].map((section) => (
                            <div key={section} style={{ marginBottom: "20px" }}>
                                <h3 style={{
                                    color: "#FFD700",
                                    fontSize: "20px",
                                    marginBottom: "15px",
                                    textTransform: "uppercase",
                                    letterSpacing: "2px",
                                    borderBottom: "2px solid #FFD700",
                                    paddingBottom: "5px"
                                }}>
                                    {section}
                                </h3>
                                {section === "Abilities" && pokemon.abilities.map((ability) => (
                                    <p key={ability.ability.name} style={{
                                        margin: "8px 0",
                                        color: "#E0E0E0",
                                        fontSize: "16px",
                                        padding: "8px 12px",
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "8px",
                                        transition: "transform 0.2s ease"
                                    }}>
                                        ⚡ {ability.ability.name}
                                    </p>
                                ))}
                                {section === "Types" && pokemon.types.map((type) => (
                                    <p key={type.type.name} style={{
                                        margin: "8px 0",
                                        color: "#E0E0E0",
                                        fontSize: "16px",
                                        padding: "8px 12px",
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "8px"
                                    }}>
                                        🔮 {type.type.name}
                                    </p>
                                ))}
                                {section === "Stats" && pokemon.stats.map((stat) => (
                                    <div key={stat.stat.name} style={{
                                        margin: "12px 0",
                                        color: "#E0E0E0",
                                        fontSize: "16px",
                                        padding: "8px 12px",
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "8px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <span>📊 {stat.stat.name}</span>
                                        <span style={{
                                            color: "#FFD700",
                                            fontWeight: "bold"
                                        }}>
                                            {stat.base_stat}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
