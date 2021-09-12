<template>
  <v-col>
    <v-row justify="center">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 black--text"
          icon
        >          
          <v-icon class='icon' size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
    </v-row>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
