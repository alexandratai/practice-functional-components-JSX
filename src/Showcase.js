import Ninetails from "./images/Ninetails.webp";

function Showcase() {
  const favPokemon = "Ninetails";
  const pokeCharacteristics = { type: "Fire", move: "Fire Spin" };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={Ninetails} alt={favPokemon} />
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ backgroundColor: "#FFFFFF", color: "#00FF00" }}>
          {pokeCharacteristics.move}
        </span>
        .
      </h2>
    </div>
  );
}

export default Showcase;
