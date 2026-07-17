const PROFILS = {
  "grand-public": {
    proteines: {
      min: 1.2,
      max: 2.0,
    },
    lipides: {
      min: 25,
      max: 35,
    },
  },

  football: {
    proteines: {
      min: 1.6,
      max: 2.0,
    },
    lipides: {
      min: 20,
      max: 30,
    },
  },
};

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
}

export function obtenirCoefficientActivite(activite) {
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
}

export function obtenirCoefficientObjectif(objectif) {
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
}

export function calculerBesoinsEnergetiques(formulaire) {
  const metabolismeBase = calculerMetabolismeBase(formulaire);
  const coefficientActivite = obtenirCoefficientActivite(
    formulaire.activite
  );
  const coefficientObjectif = obtenirCoefficientObjectif(
    formulaire.objectif
  );

  if (
    !metabolismeBase ||
    !coefficientActivite ||
    !coefficientObjectif
  ) {
    return null;
  }

  return Math.round(
    metabolismeBase *
      coefficientActivite *
      coefficientObjectif
  );
}

export function calculerProteines(formulaire, profil) {
  const poids = Number(formulaire.poids);
  const recommandations = PROFILS[profil];

  if (!poids || !recommandations) {
    return null;
  }

  return {
    min: Math.round(
      poids * recommandations.proteines.min
    ),
    max: Math.round(
      poids * recommandations.proteines.max
    ),
  };
}

export function calculerLipides(
  besoinsEnergetiques,
  profil
) {
  const recommandations = PROFILS[profil];

  if (!besoinsEnergetiques || !recommandations) {
    return null;
  }

  const pourcentageMin =
    recommandations.lipides.min / 100;

  const pourcentageMax =
    recommandations.lipides.max / 100;

  return {
    min: Math.round(
      (besoinsEnergetiques * pourcentageMin) / 9
    ),
    max: Math.round(
      (besoinsEnergetiques * pourcentageMax) / 9
    ),
  };
}

export function calculerGlucides(
  besoinsEnergetiques,
  proteines,
  lipides
) {
  if (!besoinsEnergetiques || !proteines || !lipides) {
    return null;
  }

  const glucidesMin =
    (besoinsEnergetiques -
      proteines.max * 4 -
      lipides.max * 9) /
    4;

  const glucidesMax =
    (besoinsEnergetiques -
      proteines.min * 4 -
      lipides.min * 9) /
    4;

  return {
    min: Math.max(0, Math.round(glucidesMin)),
    max: Math.max(0, Math.round(glucidesMax)),
  };
}
export function calculerHydratation(
  besoinsEnergetiques,
  profil,
  personnalisation = {}
) {
  const energie = Number(besoinsEnergetiques);

  if (!Number.isFinite(energie) || energie <= 0) {
    return null;
  }

  const arrondirLitre = (litres) =>
    Math.round(litres * 10) / 10;

  const convertirNombre = (valeur) =>
    Number(String(valeur).replace(",", "."));

  // Repère de base : 1 mL d’eau totale par kcal.
  const eauTotaleL = energie / 1000;

  // Environ 75 % de l’eau quotidienne provient des boissons.
  const boissonsBaseL = eauTotaleL * 0.75;

  if (profil === "football") {
    const tauxSudation = convertirNombre(
      personnalisation.tauxSudation
    );

    const dureeSeance = convertirNombre(
      personnalisation.dureeSeance
    );

    const personnalisationValide =
      personnalisation.personnalisee === true &&
      Number.isFinite(tauxSudation) &&
      tauxSudation > 0 &&
      Number.isFinite(dureeSeance) &&
      dureeSeance > 0;

    // En l’absence de mesure réelle, repère générique de 1 L.
    const perteSeanceL = personnalisationValide
      ? tauxSudation * (dureeSeance / 60)
      : 1;

    return {
      type: "football",

      mode: personnalisationValide
        ? "personnalise"
        : "generique",

      jourReposL: arrondirLitre(boissonsBaseL),

      uneSeanceL: arrondirLitre(
        boissonsBaseL + perteSeanceL
      ),

      deuxSeancesL: arrondirLitre(
        boissonsBaseL + perteSeanceL * 2
      ),

      perteSeanceL: arrondirLitre(perteSeanceL),

      tauxSudationLh: personnalisationValide
        ? arrondirLitre(tauxSudation)
        : null,

      dureeSeanceMin: personnalisationValide
        ? Math.round(dureeSeance)
        : null,
    };
  }

  return {
    type: "grand-public",
    eauTotaleL: arrondirLitre(eauTotaleL),
    boissonsL: arrondirLitre(boissonsBaseL),
  };
}