function({
  version = "grand-public",
  avecTexte = true,
  taille = 260,
}) {
  const football = version === "football";

  const source = avecTexte
    ? football
    : football

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