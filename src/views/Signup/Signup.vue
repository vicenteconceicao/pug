<template>
  <div class="container" key="signup">
    <input type="email" placeholder="E-mail" />
    <input type="text" placeholder="NOME COMPLETO" />
    <input type="password" placeholder="Senha" />
    <input type="password" placeholder="Confirmar Senha" />
    <button @click="goToGroups" class="btn-enter">Criar</button>
  </div>
</template>

<script>

export default {
  name: "Signup",
  methods: {
    goToGroups() {
      this.$router.push("/groups");
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />