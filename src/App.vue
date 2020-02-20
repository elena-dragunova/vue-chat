<template>
  <div id="app">
    <the-navbar />
    <div :class="$style.container">
      <main-message-list :messages="messages"/>
      <main-message-form />
    </div>
    <app-connection-status :is-connected="isConnected"/>
  </div>
</template>

<script>
import TheNavbar from '@/app/main/components/the-navbar';
import MainMessageList from '@/app/main/components/main-message-list';
import MainMessageForm from '@/app/main/components/main-message-form';

export default {
  components: {
    TheNavbar,
    MainMessageList,
    MainMessageForm,
  },
  data() {
    return {
      isConnected: false,
      messages: [
        {
          id: 1,
          username: 'Paul',
          message: 'Hey',
        },
        {
          id: 2,
          username: 'Evan',
          message: 'How are you?',
        },
      ],
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

<style lang="scss" module>
@import "styles/base";
.container {
  width: 300px;
  margin: 0 auto;
}
</style>
