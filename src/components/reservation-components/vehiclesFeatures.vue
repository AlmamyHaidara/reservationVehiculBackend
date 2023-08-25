<template>
    <div class=" flex max-w-5xl">

        <div
            class="mx-auto grid max-w-full h-full grid-cols-2 items-center gap-x-8 gap-y-16 px-4  py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper border-0  max-w-5xl">
                <swiper-slide class=" flex-row  border-0 max-w-5xl " v-for="image in vehicules['images']" :key="image.id">
                    <div class="  max-w-5xl grid grid-cols-6 grid-rows-2 gap-2 sm:gap-2 lg:gap-2 ">
                        <img :src="'http://localhost:8000/storage' + image.paths"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            class="rounded-lg bg-gray-100 w-full h-96 object-cover" />
                    </div>
                </swiper-slide>
            </swiper>
            <div class="max-w-xl mx-auto">
                <h2 class="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">{{ vehicules.marque }} {{
                    vehicules.model }}</h2>
                <!-- <p class="mt-2 text-gray-500">{{ vehicules.nombrePlace }} Places</p>
                <p class="mt-4 text-gray-500">{{ vehicules.description }}</p> -->

                <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div v-for="(feature, index) in features" :key="index" class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
                        <dd class="mt-2 text-sm  capitalize"
                            :class="feature.name == 'Prix de Location' ? ' text-blue-900 rounded-sm font-bold p-2' : 'text-gray-500'">
                            {{ feature.description }}</dd>
                    </div><Button label="Reserver" class="ml-52 h-10 mt-14 w-44"></Button>
                </dl>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";


export default defineComponent({

    props: ['vehicules'],
    data() {
        return {
            features: ref(),
            modules: [Autoplay, Pagination, Navigation, FreeMode],
        }
    }, mounted() {

        this.features = [{ name: 'Description', description: this.vehicules.description },
        { name: 'Places', description: this.vehicules.nombrePlace },
        { name: 'Transmission', description: this.vehicules.transmission },
        { name: 'Type de Voiture ', description: this.vehicules.categoryVehicule },
        { name: 'Kilometrage', description: this.vehicules.kilometrage },
        { name: 'Carburant', description: this.vehicules.typeCarburant },
        { name: 'Couleur', description: this.vehicules.couleur + '' },
        { name: 'Localisation', description: this.vehicules.places ? `La voiture se trouve dans la ville de ${this.vehicules.places.city} a  ${this.vehicules.places.area}` : 'Localisation inconnue' },
        { name: 'Prix de Location', description: `${Math.round(this.vehicules.prix)} FCFA/Jour` }]
        console.table("uuuuu" + this.features);

    }
})
</script>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
    --tw-text-opacity: 1;
    color: rgb(30 58 138 / var(--tw-text-opacity))
}

.swiper-pagination-bullet {
    --tw-text-opacity: 1;
    background: rgb(30 58 138 / var(--tw-text-opacity));
}
</style>