<template>
  <span class="mail">email@email.com</span>
  <input type="text" placeholder="NOME COMPLETO">
  <input type="password" placeholder="Senha">
  <input type="password" placeholder="Confirmar Senha">
  <button class="btn-enter">Entrar</button>
  <ButtonBack />
</template>

<script>
import ButtonBack from "@/components/buttons/ButtonBack/ButtonBack";

export default {
  name: "LoginCreate",
  components: {
    ButtonBack,
  },
  methods:{
    goToPass(){
      this.$router.push("/group/pass");
    }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped />