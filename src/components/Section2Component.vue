<template>
  <div class="section2 mt-4">
    <p
      class="mt-2 mb-5 font-bold text-2xl text-blue-900"
      style="font-family: 'Press Start 2P', cursive; font-family: 'Simonetta', cursive"
    >
      La voiture idéale pour votre voyage est à portée de main
    </p>
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :freeMode="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper w-4/6"
    >
      <swiper-slide class="w-3 ml-3">
        <div class="card flex align-items-center justify-content-center">
          <Card class="border-0" style="width: 210px; max-height: 190px">
            <template #header>
              <img alt="user header" src="@/assets/images/img4.jpg" width="200" />
            </template>
            <template #title> Advanced Card </template>
          </Card>
        </div>
      </swiper-slide>

      <swiper-slide class="w-3 ml-3"
        ><div class="card flex align-items-center justify-content-center">
          <Card class="border-0" style="width: 210px; max-height: 190px">
            <template #header>
              <img alt="user header" src="@/assets/images/img5.jpg" width="200" />
            </template>
            <template #title> Advanced Card </template>
          </Card>
        </div>
      </swiper-slide>
      <swiper-slide class="w-3 ml-3"
        ><div class="card flex align-items-center justify-content-center">
          <Card class="border-0" style="width: 210px; max-height: 190px">
            <template #header>
              <img alt="user header" src="@/assets/images/img4.jpg" width="200" />
            </template>
            <template #title> Advanced Card </template>
          </Card>
        </div></swiper-slide
      >
      <swiper-slide class="w-3 ml-3"
        ><div class="card flex align-items-center justify-content-center">
          <Card class="border-0" style="width: 210px; max-height: 190px">
            <template #header>
              <img alt="user header" src="@/assets/images/img1.jpg" width="200" />
            </template>
            <template #title> Advanced Card </template>
          </Card>
        </div></swiper-slide
      >
      <swiper-slide class="w-3 ml-3"
        ><div class="card flex align-items-center justify-content-center">
          <Card class="border-0" style="width: 210px; max-height: 190px">
            <template #header>
              <img alt="user header" src="@/assets/images/img6.jpg" width="200" />
            </template>
            <template #title> Advanced Card </template>
          </Card>
        </div></swiper-slide
      >
      <swiper-slide class="w-3 ml-3"
        ><div class="card flex align-items-center justify-content-center">
          <Card class="border-0" style="width: 210px; max-height: 190px">
            <template #header>
              <img alt="user header" src="@/assets/images/img2.jpg" width="200" />
            </template>
            <template #title> Advanced Card </template>
          </Card>
        </div></swiper-slide
      >
      <swiper-slide class="w-3 ml-3"
        ><div class="card flex align-items-center justify-content-center">
          <Card class="border-0" style="width: 210px; max-height: 190px">
            <template #header>
              <img alt="user header" src="@/assets/images/img3.jpg" width="200" />
            </template>
            <template #title> Advanced Card </template>
          </Card>
        </div></swiper-slide
      >
      <swiper-slide class="w-3 ml-3"
        ><div class="card flex align-items-center justify-content-center">
          <Card class="border-0" style="width: 210px; max-height: 190px">
            <template #header>
              <img alt="user header" src="@/assets/images/img7.jpg" width="200" />
            </template>
            <template #title> Advanced Card </template>
          </Card>
        </div>
      </swiper-slide>
      <swiper-slide class="w-3 ml-3"
        ><div class="card flex align-items-center justify-content-center">
          <Card class="border-0" style="width: 210px; max-height: 190px">
            <template #header>
              <img alt="user header" src="@/assets/images/img8.jpg" width="200" />
            </template>
            <template #title> Advanced Card </template>
          </Card>
        </div></swiper-slide
      >
    </swiper>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

export default defineComponent({
  name: "Section2Component",
  components: {},
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation, FreeMode],
    };
  },
});
</script>

<style></style>
