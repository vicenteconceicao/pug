<template>
  <div class="container">
    <input @click="goToLoginEmail" placeholder="Informe o Código" />
    <button @click="goTonewGroup">Novo Grupo</button>
    <button @click="goToGroups">Entrar</button>
  </div>
</template>

<script>
export default {
  name: "LoginCode",
  methods: {
    goToLoginEmail() {
      this.$router.push("/login/mail");
    },
    goToGroups() {
      this.$router.push("/login/user");
    },
    goTonewGroup() {
      this.$router.push("/new");
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />