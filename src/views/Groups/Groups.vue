<template>
  <div class="groups">
    <HeaderBar />
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderBar from "@/components/template/HeaderBar/HeaderBar";
export default {
  components: {
    HeaderBar,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />