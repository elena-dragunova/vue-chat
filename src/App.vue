<template>
  <div id="app">
    <app-connection-status :is-connected="isConnected"/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isConnected: false,
    };
  },
  sockets: {
    connect() {
      console.log('connected');
      this.isConnected = true;
    },
    disconnect() {
      console.log('disconnected');
      this.isConnected = false;
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
