<template>
    <div class="bg-white flex">
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div class="grid grid-cols-auto grid-rows-1 gap-4 sm:gap-4 lg:gap-4" v-for="image in selectVehicle['images']"
                :key="image.id">
                <img :src="image.paths" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    class="rounded-lg bg-gray-100 w-72 h-96 object-cover" />
            </div>
            <div>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ selectVehicle.marque }} {{
                    selectVehicle.model }}</h2>
                <!-- <p class="mt-2 text-gray-500">{{ selectVehicle.nombrePlace }} Places</p>
                <p class="mt-4 text-gray-500">{{ selectVehicle.description }}</p> -->

                <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
                        <dd class="mt-2 text-sm  capitalize"
                            :class="feature.name == 'Prix de Location' ? ' text-blue-900 rounded-sm font-bold p-2' : 'text-gray-500'">
                            {{ feature.description }}</dd>
                        </div><Button  label="Reserver" class="ml-52 h-10 mt-14 w-44"></Button>
                </dl>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({

    props: ['selectVehicle'],
    data() {
        return {
            selectVehicle: this.selectVehicle,
            features: [
                { name: 'Description', description: this.selectVehicle.description },
                { name: 'Places', description: this.selectVehicle.nombrePlace },
                { name: 'Transmission', description: this.selectVehicle.transmission },
                { name: 'Type de Voiture ', description: this.selectVehicle.categoryVehicule },
                { name: 'Kilometrage', description: this.selectVehicle.kilometrage },
                { name: 'Carburant', description: this.selectVehicle.typeCarburant },
                { name: 'Couleur', description: this.selectVehicle.couleur + '' },
                { name: 'Localisation', description: `La voiture se trouve a  ${this.selectVehicle.places[0].city}  au ${this.selectVehicle.places[0].area} ` },
                { name: 'Prix de Location', description: `${Math.round(this.selectVehicle.prix)} FCFA/Jour` },
            ]
        }
    }
})
</script>