<template>
  <div>
    <span v-if="isConnected" :class="[$style.bar, $style.connected]">
      Connected to the server
    </span>
    <span v-else :class="[$style.bar, $style.disconnected]">
      Disconnected from the server
    </span>
  </div>
</template>

<script>
export default {
  props: {
    isConnected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 5px;

  &.connected {
    background-color: greenyellow;
    color: black;
  }

  &.disconnected {
    background-color: red;
    color: white;
  }
}
</style>
