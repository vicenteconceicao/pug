<template>
  <div class="home">
    <Header></Header>
    <HomeContent></HomeContent>
  </div>
</template>

<script>
import Header from "@/components/home/Header";
import HomeContent from "@/components/home/HomeContent/HomeContent"

export default {
  name: "Home",
  components: {
    Header,
    HomeContent
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />