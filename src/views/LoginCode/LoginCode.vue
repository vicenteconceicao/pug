<template>
    <input @click="goToLoginEmail" placeholder="Informe o Código" />
    <button @click="goToSignin">Entrar</button>
    <button @click="goToSignup">Criar Conta</button>
</template>

<script>
export default {
  name: "LoginCode",
  methods: {
    goToLoginEmail(){
      this.$router.push("/group");
    },
    goToSignin() {
      this.$router.push("/login/signin");
    },
    goToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />