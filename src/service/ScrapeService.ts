import axios from "axios";
import cheerio from "cheerio";

interface City {
  id: number;
  name: String;
}
interface Area {
  id: number;
  name: String;
}
export default class ScrapeService {
  async scrapeCountry(url: string) {
    try {
      const response = await axios.get(url);
      const html = response.data;

      const $ = cheerio.load(html);
      const pageTitle = $("h1").text();
      const links: City[] = [];

      $("td>a").each((index, element) => {
        // const link = $(element).attr('href');
        const link: City = {
          id: index,
          name: $(element).text(),
        };
        if (link) {
          links.push(link);
        }
      });

      return { pageTitle, links };
    } catch (error) {
      throw new Error("Une erreur s'est produite lors du scraping.");
    }
  }

  async scrapeArea(url: string) {
    try {
      const response = await axios.get(url);
      const html = response.data;

      const $ = cheerio.load(html);
      const pageTitle = $("h1").text();
      const links: Area[] = [];

      $("td>a").each((index, element) => {
        // const link = $(element).attr('href');
        const link: Area = {
          id: index,
          name: $(element).text(),
        };
        if (link) {
          links.push(link);
        }
      });

      return { pageTitle, links };
    } catch (error) {
      throw new Error("Une erreur s'est produite lors du scraping.");
    }
  }
}
