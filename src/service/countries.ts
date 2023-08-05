import axios from 'axios';

interface Country {
  name: string;
  code: string;
  flagUrl: string;
}

export async function getCountriesWithFlags(): Promise<Country[]> {
  try {
    // 1. Récupérer la liste des pays et leurs codes depuis l'API "Rest Countries"
    const response = await axios.get('https://restcountries.com/v3/all');
    const countriesData = response.data;

    const countriesWithFlags: Country[] = countriesData.map((country: any) => {
      const countryCode: string = country.cca2;
      const flagUrl: string = `https://flagpedia.net/data/flags/w580/${countryCode.toLowerCase()}.png`;

      return {
        name: country.name.common,
        code: countryCode,
        flagUrl: flagUrl,
      };
    });

    return countriesWithFlags;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des pays :', error);
    return [];
  }
}
