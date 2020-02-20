<template>
  <div :class="$style.messageList">
    <span v-for="message in messages"
          :key="message.id"
          :class="$style.messageItem">
      <strong>{{ message.username }}</strong>
      {{ message.message }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
.messageList {
  overflow: scroll;
  height: 150px;
  margin: 10px auto;
  padding: 5px;
  border: 1px solid gray;

  .messageItem {
    display: block;
    padding: 2px;
  }
}
</style>
