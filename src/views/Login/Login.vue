<template>
  <div class="container">
    <router-view />
    <ButtonBack />
  </div>
</template>

<script>
import ButtonBack from "@/components/buttons/ButtonBack/ButtonBack";
export default {
  name: "Login",
  components: {
    ButtonBack,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />