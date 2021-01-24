<template>
  <div class="login">
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