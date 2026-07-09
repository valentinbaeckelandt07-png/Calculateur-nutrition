export function calculerMetabolismeBase(formulaire) {
  const poids = Number(formulaire.poids);
  const taille = Number(formulaire.taille);
  const age = Number(formulaire.age);

  if (!poids || !taille || !age) {
    return null;
  }

  let metabolismeMJ;

  if (formulaire.sexe === "Homme") {
    metabolismeMJ =
      1.083 * poids ** 0.48 * taille ** 0.5 * age ** -0.13;
  } else {
    metabolismeMJ =
      0.963 * poids ** 0.48 * taille ** 0.5 * age ** -0.13;
  }

  const metabolismeKcal = metabolismeMJ * 239;

  return Math.round(metabolismeKcal);
}export function obtenirCoefficientActivite(activite) {
  switch (activite) {
    case "Sédentaire":
      return 1.2;
    case "Faiblement actif":
      return 1.4;
    case "Modérément actif":
      return 1.6;
    case "Très actif":
      return 1.8;
    case "Extrêmement actif":
      return 1.9;
    default:
      return null;
  }
}export function obtenirCoefficientObjectif(objectif) {
  switch (objectif) {
    case "Perte de masse grasse":
      return 0.85;
    case "Maintien":
      return 1;
    case "Prise de masse":
      return 1.07;
    default:
      return null;
  }
}export function calculerBesoinsEnergetiques(formulaire) {
  const metabolismeBase = calculerMetabolismeBase(formulaire);
  const coefficientActivite = obtenirCoefficientActivite(formulaire.activite);
  const coefficientObjectif = obtenirCoefficientObjectif(formulaire.objectif);

  if (!metabolismeBase || !coefficientActivite || !coefficientObjectif) {
    return null;
  }

  return Math.round(
    metabolismeBase * coefficientActivite * coefficientObjectif
  );
}export function calculerProteines(formulaire) {
  const poids = Number(formulaire.poids);

  if (!poids) {
    return null;
  }

  return {
    min: Math.round(poids * 1.4),
    max: Math.round(poids * 2),
  };
}export function calculerLipides(besoinsEnergetiques) {
  if (!besoinsEnergetiques) {
    return null;
  }

  return {
    min: Math.round((besoinsEnergetiques * 0.25) / 9),
    max: Math.round((besoinsEnergetiques * 0.35) / 9),
  };
}export function calculerGlucides(besoinsEnergetiques, proteines, lipides) {
  if (!besoinsEnergetiques || !proteines || !lipides) {
    return null;
  }

  const glucidesMin =
    (besoinsEnergetiques - proteines.max * 4 - lipides.max * 9) / 4;

  const glucidesMax =
    (besoinsEnergetiques - proteines.min * 4 - lipides.min * 9) / 4;

  return {
    min: Math.round(glucidesMin),
    max: Math.round(glucidesMax),
  };
}