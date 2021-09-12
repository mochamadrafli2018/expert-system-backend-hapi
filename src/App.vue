<template>
  <v-app>
    <Appbar/>
    <v-main>
      <Name/>
      <Checkbox/>
      <v-row class="text-center">
        <v-col
          class="mb-1"
        >
        <h2 class="headline font-weight-bold mb-3">
        Rekomendasi</h2>
        </v-col>
      </v-row>
      <Media/>
      <Route/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from './components/Appbar.vue'
import Checkbox from './components/Checkbox.vue'
import Footer from './components/Footer.vue'
import Media from './components/Media.vue'
import Name from './components/Name.vue'
import Route from './components/Route'

export default {
  name: 'App',

  components: {
    Appbar,
    Checkbox,
    Footer,
    Media,
    Name,
    Route,
  },
  data: () => ({
    //
  }),
};
</script>
