<template>
  <div :style="{height:height}" class="header">come on,this is top,building...</div>
</template>

<script>
export default {
  name: "Header",
  props: {
    height: {
      type: String,
      default: '80px'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>