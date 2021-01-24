<template>
  <span class="mail">email@email.com</span>
  <input type="password" placeholder="Senha" />
  <button class="btn-enter">Entrar</button>
  <span class="forget">Esqueci minha senha!</span>
  <ButtonBack />
</template>

<script>
import ButtonBack from "@/components/buttons/ButtonBack/ButtonBack";

export default {
  name: "LoginPass",
  components: {
    ButtonBack,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />