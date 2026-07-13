function LogoNutriCalc({
  version = "grand-public",
  avecTexte = true,
  taille = 260,
}) {
  const football = version === "football";

  const source = avecTexte
    ? football
      ? "/logo-nutricalc-football.svg"
      : "/logo-nutricalc.svg"
    : football
      ? "/icone-nutricalc-football.svg"
      : "/icone-nutricalc.svg";

  return (
    <img
      src={source}
      alt={football ? "Alimelys Football" : "Alimelys"}
      style={{
        width: avecTexte ? taille : Math.min(taille, 100),
        height: "auto",
      }}
      className="block"
    />
  );
}

export default LogoNutriCalc;