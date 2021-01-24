<template>
  <label>
    <input type="checkbox" />
    <span class="checkmark"></span>
     {{ label }}
  </label>
</template>

<script>
export default {
    props:{
        label: String
    }
};
</script>

<style src="./style.scss" lang="scss" scoped />