<template>
  <div class="bg-slate-100 relative">
    <div class="absolute inset-0 opacity-5 "></div>
    <img class="object-cover w-full" :src="bgImg" style="height: 46rem" />
    <div class=" mt-5 overlay absolute inset-0 flex items-center justify-center flex-col ">
      <div class="mb-14">
        <h1 class="text-6xl antialiased font-black text-slate-100">CarMali Location</h1>
      </div>
      <div class="grid col-6 w-3/4">
        <div class="flex mb-5">
          <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name"
            placeholder="Select a Country" class="w-3 md:w-14rem mr-5" @change="getInputFunct('list')">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex align-items-center">
                <img :alt="slotProps.value.label" :src="slotProps.value.flagUrl"
                  :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="flex align-items-center">
                <img :alt="slotProps.option.label" :src="slotProps.option.flagUrl"
                  :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>


          <Dropdown v-model="selectCity" :options="citys" filter optionLabel="name" placeholder="Select a Country"
            class="w-3 md:w-14rem mr-5" @change="getInputFunct('list')">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex align-items-center">
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="flex align-items-center">
                <div>
                  {{ slotProps.option.name }}
                </div>
              </div>
            </template>
          </Dropdown>

          <Dropdown v-model="selectArea" :options="areas" filter optionLabel="name" placeholder="Select a Country"
            class="w-3 md:w-14rem mr-5" @change="getInputFunct('list')">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex align-items-center">
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="flex align-items-center">
                <div>
                  {{ slotProps.option.name }}
                </div>
              </div>
            </template>
          </Dropdown>
          <Calendar v-model="dateStart" showIcon dateFormat="dd/mm/yy" class="p-datepicker-today mr-5 "
            style="width: 14rem;" @change="getInputFunct" />

        </div>
        <div class="flex mt-5">
          <Calendar v-model="timeStart" showIcon icon="pi pi-stopwatch" :timeOnly="true" class="wmr-5"
            style="width: 14rem;" />

          <Calendar v-model="dateEnd" showIcon dateFormat="dd/mm/yy" class="p-datepicker-today ml-5 "
            style="width: 14rem;" @change="getInputFunct" />



          <Calendar v-model="timeEnd" showIcon icon="pi pi-stopwatch" :timeOnly="true" class="ml-5" style="width: 14rem;"
            @change="getInputFunct" />
          <Button v-model="timeEnd"
            class="ml-5 bg-blue-900 rounded-md border-10 border-blue-900 hover:border-solid hover:border-5  hover:border-blue-900 hover:bg-white hover:text-blue-900 text-white"
            style="width: 14rem;" label="Chercher" @click="searchCar" />
        </div>

      </div>
      <div class="w-5 h-60 mt-5">
        <!-- <ContainerMap /> -->
        <!-- <testComponent /> -->

        <!-- <mapComponent /> -->
      </div>
    </div>
    {{ getInputFunct() }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import mapComponent from "@/components/mapComponent.vue";
import testComponent from "@/components/test-Component.vue";
import ContainerMap from "@/components/Container-Map.vue";
import ScrapeService from "@/service/ScrapeService";

interface Country {
  name: string;
  code: string;
  flagUrl: string;
}
interface City {
  id: number;
  name: String;
}
import { getCountriesWithFlags } from "@/service/countries";
import axios from "axios";
import router from "@/router";

export default defineComponent({
  name: "HeaderAcceuil",
  components: {
    mapComponent,
    ContainerMap,
    testComponent,
  },
  emits: ["flash-msg"],
  data() {
    return {
      countries: ref<Country[]>([]),
      citys: ref<Object[]>([]) as any,
      areas: ref<Object[]>([]) as any,
      cityValue: ref(),
      areaValue: ref(),
      error: ref(false),
      bgImg: require("@/assets/images/bg-img.jpg"),
      dateEnd: ref(new Date()),
      dateStart: ref(new Date()),
      timeStart: ref(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      ),
      timeEnd: ref(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      ),

      selectedCountry: ref({
        name: "Mali",
        code: "ML", // Code ISO 3166-1 alpha-2 du Mali
        flagUrl: "https://flagpedia.net/data/flags/w580/ml.png",
      }),

      selectCity: ref({
        id: 1,
        name: "Bamako",
      }) as any,
      selectArea: ref({
        id: 1,
        name: "Bacodjicoroni",
      }) as any,
      zoom: 12,
      scrapeService: new ScrapeService(),

      scrapedData: {
        pageTitle: "",
        links: [] as Object[],
      }
    };
  },
  methods: {
    getInputFunct(type: String = "") {

      console.log("Tetyhe");
      if (
        this.dateStart.getMonth() + 1 > this.dateEnd.getMonth() + 1 ||
        this.dateStart.getFullYear() > this.dateEnd.getFullYear() ||
        (this.dateStart.getMonth() + 1 == this.dateEnd.getMonth() + 1 &&
          this.dateStart.getFullYear() == this.dateEnd.getFullYear() &&
          this.dateStart.getDate() > this.dateEnd.getDate())
      ) {

        this.$emit(
          "flash-msg",
          "La date de debut doit pas etre superieur a la date de fin"
        );
        this.error = true
      }
      else {
        console.log("Date validated");

        // this.citys = []
        if (type == 'list') {
          this.getCityOfCounty(this.selectedCountry.name)
          this.getAreaOfCity(this.selectCity.name, this.selectedCountry.name)
        }
      }
    },
    async getCityOfCounty(country: String) {
      const urlCountry = `https://www.worldcitydb.com/${country}_country?lang=fr`; // Remplacez par l'URL souhaitée

      console.log(this.citys)
      try {
        this.scrapedData = await this.scrapeService.scrapeCountry(urlCountry);
        this.citys = []
        this.scrapedData.links.forEach(element => {
          this.citys.push(element);
          // this.selectCity = element
        });
        this.error = false
        return this.citys
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
        this.error = true
      }
    },
    async getAreaOfCity(city: String, country: String) {
      console.log("urlurlArea: ", city);
      const urlArea = `https://www.worldcitydb.com/${city ? city.toLowerCase() : "bamako"}_in_${country ? country.toLowerCase() : "mali"}_state?lang=fr`; // Remplacez par l'URL souhaitée


      try {
        this.scrapedData = await this.scrapeService.scrapeArea(urlArea);
        // this.citys = this.scrapedData.links
        this.areas = []
        this.scrapedData.links.forEach(element => {
          this.areas.push(element);
        });
        this.error = false
        return this.areas
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
        this.error = true
      }
    },
    searchCar: async function () {

      console.log(this.citys);
      if (this.citys.value != ref([]) && this.areas.value != ref([]) && !this.error) {
        let data = {
          'selectedCountry': this.selectedCountry,
          'selectCity': this.selectCity,
          'selectArea': this.selectArea,
          'dateStart': this.dateStart.getFullYear() + '-' + '0' + (this.dateStart.getMonth() + 1) + '-' + this.dateStart.getDate(),
          'dateEnd': this.dateEnd.getFullYear() + '-' + '0' + (this.dateEnd.getMonth() + 1) + '-' + this.dateEnd.getDate(),
          'timeStart': this.timeStart,
          'timeEnd': this.timeEnd,
        }
        console.table(data);

        let value = await axios.get(`http://localhost:8000/api/find-vehicles-${this.selectedCountry.name.toLowerCase()}-${this.selectCity.name.toLowerCase()}-${this.selectArea.name.toLowerCase()}-${data.dateStart}_${data.dateEnd}`)
        console.log('=>', (Array), value.data);
        const dataJSON = JSON.stringify(value.data)
        value.data ?
          router.push({ path: '/vehicules/reservation', query: { data: dataJSON } })
          : false
      }

    }

  },
  async mounted() {

    // this.scrapeService = new ScrapeService();


    const url = `https://www.worldcitydb.com/${this.selectedCountry.name}_country?lang=fr`; // Remplacez par l'URL souhaitée
    console.log("url: ", url);

    try {
      // Appel de la fonction pour obtenir les données des pays et leurs drapeaux
      const data = await getCountriesWithFlags();
      this.countries = data;
      this.getInputFunct();
      this.scrapedData = await this.scrapeService.scrapeCountry(url);
      // this.citys = this.scrapedData.links
      this.scrapedData.links.forEach(element => {

        this.citys.push(element);
      });
      this.error = false
      console.table(this.citys);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
      this.error = true
    }
  },
});
</script>

<style></style>
