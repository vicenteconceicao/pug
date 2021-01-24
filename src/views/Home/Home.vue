<template>
  <div class="home">
    <Header></Header>
    <div class="buttons">
      <input placeholder="Informe o Código" />
      <button @click="goTonewGroup">Novo Grupo</button>
      <button @click="goToGroups">Entrar</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/template/Header/Header";

export default {
  name: "Home",
  components: {
    Header,
  },
  methods:{
    goToGroups(){
      this.$router.push("/groups")
    },
    goTonewGroup(){
      this.$router.push("/new")
    }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped />