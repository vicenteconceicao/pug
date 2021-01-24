<template>
    <input @click="goToLoginEmail" placeholder="Informe o Código" />
    <button @click="goTonewGroup">Novo Grupo</button>
    <button @click="goToGroups">Entrar</button>
</template>

<script>
export default {
  name: "LoginCode",
  methods: {
    goToLoginEmail() {
      this.$router.push("/group");
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