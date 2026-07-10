function Logo({
  version = "grand-public",
  largeur = 320,
  className = "",
}) {
  const source =
    version === "football"
      ? "/brand/logo-nutricalc-football.png"
      : "/brand/logo-nutricalc.png";

  return (
    <img
      src={source}
      alt={
        version === "football"
          ? "NutriCalc Football"
          : "NutriCalc"
      }
      style={{ width: largeur }}
      className={`block h-auto max-w-full ${className}`}
    />
  );
}

export default Logo;