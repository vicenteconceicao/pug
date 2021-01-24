<template>
  <div class="container">
    <input type="mail" placeholder="E-mail" />
    <input type="password" placeholder="senha" />
    <Checkbox label="MATENHA-ME CONECTADO"/>
    <button class="btn-enter">Entrar</button>
    <span class="forget">Esqueci minha senha!</span>
    <ButtonBack />
  </div>
</template>

<script>
import ButtonBack from "@/components/buttons/ButtonBack/ButtonBack";
import Checkbox from "@/components/inputs/Checkbox/Checkbox";
export default {
  name: "Login",
  components: {
    ButtonBack,
    Checkbox,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />