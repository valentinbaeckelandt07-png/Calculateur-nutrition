function Logo({
  version = "grand-public",
  largeur = 125,
  className = "",
}) {
  const football = version === "football";

  const source = football
    ? "/brand/logo-alimelys-football.png"
    : "/brand/logo-alimelys.png";

  return (
    <img
      src={source}
      alt={football ? "Alimelys Football" : "Alimelys"}
      style={{ width: largeur }}
      className={`block h-auto max-w-full ${className}`}
    />
  );
}

export default Logo;