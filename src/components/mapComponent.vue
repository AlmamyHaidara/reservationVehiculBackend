<template>
  <div>
    <!-- <h1>{{ getScrapedData().pageTitle }}</h1> -->
    <ul>
      <li v-for="link in getScrapedData().links" :key="link.id">
        <a :href="link">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ScrapeService from "@/service/ScrapeService";
import "leaflet/dist/leaflet.css";

export default class mapComponent extends Vue {
  scrapeService: any;

  private scrapedData = {
    pageTitle: "",
    links: [] as String[],
  };
  getScrapedData() {
    return this.scrapedData;
  }

  async mounted() {
    this.scrapeService = new ScrapeService();
    const url = "https://www.worldcitydb.com/mali_country?lang=fr"; // Remplacez par l'URL souhaitée

    try {
      this.scrapedData = await this.scrapeService.scrapeWebsite(url);
      console.log("///// ", this.scrapedData);
    } catch (error: any) {
      console.error("Erreur de scraping :", error.message);
    }
  }
}
</script>
<style scoped></style>
