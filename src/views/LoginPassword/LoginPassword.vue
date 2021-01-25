<template>
    <input type="mail" placeholder="E-mail" />
    <input type="password" placeholder="senha" />
    <Checkbox label="MATENHA-ME CONECTADO"/>
    <button class="btn-enter">Entrar</button>
    <span class="forget">Esqueci minha senha!</span>
</template>

<script>

import Checkbox from "@/components/inputs/Checkbox/Checkbox";
export default {
  name: "LoginPassword",
  components: {
    Checkbox,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />