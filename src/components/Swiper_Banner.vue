<template>
  <div class="swipernav">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
        <img src="../asset/img/b1.jpg" alt="img1">
    </swiper-slide>
    <swiper-slide>
        <img src="../asset/img/b2.jpg" alt="img2">
    </swiper-slide>
    <swiper-slide>
        <img src="../asset/img/b3.jpg" alt="img3">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
    swiper,
    swiperSlide
  },
  data(){
      return {
        swiperOption:{
        pagination: {
        el: '.swiper-pagination'
        },
        autoplay: true,
        delay: 1000
      }
      }
  }
}
</script>
<style scoped>
.swipernav{
  margin-bottom: 16px;
}
</style>

