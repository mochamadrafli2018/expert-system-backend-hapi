<template>
  <v-row
      justify="center"
      no-gutters
  >
  <v-container 
    fluid 
    justify="center"
  > 
    <v-checkbox
      v-model="selected"
      label="Mata terasa gatal"
      value="Mata terasa gatal"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="Mata merah"
      value="Mata merah"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="Mata membengkak"
      value="Mata membengkak"
    ></v-checkbox>
    <p>{{ selected }}</p>
  </v-container>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        selected: ['John'],
      }
    },
  }
</script>