<template>
  <div class="container">
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
    <ButtonBack />
  </div>
</template>

<script>
import ButtonBack from "@/components/buttons/ButtonBack/ButtonBack";
export default {
  name: "Home",
  components: {
    ButtonBack,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />