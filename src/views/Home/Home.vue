<template>
  <div class="home">
    <div class="buttons">
      <input placeholder="Informe o Código" />
      <button @click="goTonewGroup">Novo Grupo</button>
      <button @click="goToGroups">Entrar</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  methods:{
    goToGroups(){
      this.$router.push("/login")
    },
    goTonewGroup(){
      this.$router.push("/new")
    }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped />