<template>
  <div v-once>
    <nav :class="$style.navbar">
      <span>Socket Chat</span>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.navbar {
  background-color: blueviolet;
  padding: 10px;
  margin: 0;
  text-align: center;
  color: white;
}
</style>
