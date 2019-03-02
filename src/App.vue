<template>
  <v-app>
    <v-content class="app-wrapper">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    //
  },
  data () {
    return {
      //
    }
  }
};
</script>
<style lang=scss>
  .app-wrapper {
    min-height: 90vh;
    font-family: heebo;
  }
</style>
