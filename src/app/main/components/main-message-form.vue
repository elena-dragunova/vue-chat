<template>
  <form @submit.prevent="sendMessage">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea name="message" id="message" v-model="message"></textarea>
    </div>
    <button type="submit">Send</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      message: '',
    };
  },
  methods: {
    sendMessage() {
      this.$socket.emit('chatMessage', {
        username: this.username,
        message: this.message,
      });
    },
  },
};
</script>

<style lang="scss" module>
input,
textarea {
  margin: 5px;
  width: 100%;
}
</style>
