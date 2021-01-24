<template>
  <div class="container" key="options">
    <button @click="goToSignin">Entrar</button>
    <button @click="goToSignup">Criar Conta</button>
  </div>
</template>

<script>
export default {
  name: "LoginCode",
  methods: {
    goToSignin() {
      this.$router.push("/login");
    },
    goToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />