<template>
  <v-app>
      <heade />
      <home />
      <about />
      <service />
      <room />
      <other />
      <contact />
      <foote />
  </v-app>
</template>

<script>
import heade from '@/components/header-page.vue'
import home from '@/components/home-page.vue'
import about from '@/components/about-page.vue'
import service from '@/components/service-page.vue'
import room from '@/components/room-page.vue'
import other from '@/components/other-comps.vue'
import contact from '@/components/contact-page.vue'
import foote from '@/components/footer-page.vue'
export default {
  name: 'App',

  components: {
  heade,home,about,service,room,other,contact,foote
  },

  data: () => ({
    //
  }),
  mounted(){
 
  },created(){
    this.$store.commit('get');
    this.$store.commit('fetchImages');
  }
};
</script>
<style>

.x{
  margin: 0;
}
</style>