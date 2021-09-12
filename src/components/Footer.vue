<template>
  <v-footer
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary lighten-1 py-1 text-center white--text"
        cols="12"
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-col>

      <v-col
        class="primary lighten-1 py-1 text-center white--text"
        cols="12"
      >
          <v-btn
            v-for="i in icons"
            :key="i"
            class="mx-2 white--text"
            icon
            href= {i.link}
            target="_blank"
          >
            <v-icon 
              class='icon' 
              size="24px"
            >
              {{ i.icon }}
            </v-icon>
          </v-btn>
      </v-col>

      <v-divider></v-divider>
      
      <v-col
        class="primary lighten-1 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Mochamad Rafli Ramadhan</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    components: {
    },
    data: () => ({
      links: [
        'Kembali',
        'Tentang',
        'Biograph',
        'Panduan',
        'Portofolio',
      ],
      icons: [
        {
          icon:'mdi-facebook',
          link:'https://stackoverflow.com/questions/49654527/open-link-in-new-window-with-vuetify-v-btn-and-vue-router'
        },
        {
          icon:'mdi-twitter',
          link:'https://stackoverflow.com/questions/49654527/open-link-in-new-window-with-vuetify-v-btn-and-vue-router'
        },
        {
          icon:'mdi-linkedin',
          link:'https://stackoverflow.com/questions/49654527/open-link-in-new-window-with-vuetify-v-btn-and-vue-router'
        },
        {
          icon:'mdi-instagram',
          link:'https://stackoverflow.com/questions/49654527/open-link-in-new-window-with-vuetify-v-btn-and-vue-router'
        },
      ],
    }),
  }

/*
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ],
*/
</script>