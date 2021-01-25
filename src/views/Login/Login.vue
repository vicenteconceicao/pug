<template>
  <div class="container" key="login">
    <input type="mail" placeholder="E-mail" />
    <input type="password" placeholder="senha" />
    <Checkbox label="MATENHA-ME CONECTADO" />
    <button @click="goToGroups" class="btn-enter">Entrar</button>
    <span class="forget">Esqueci minha senha!</span>
  </div>
</template>

<script>
import Checkbox from "@/components/inputs/Checkbox/Checkbox";
export default {
  name: "LoginPassword",
  components: {
    Checkbox,
  },
  methods:{
    goToGroups(){
      this.$router.push('/groups');
    }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped />