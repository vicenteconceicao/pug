<template>
  <input @click="goToPass" type="email" placeholder="email@email.com" />
  <button class="btn-enter">Entrar</button>
  <ButtonBack />
</template>

<script>
import ButtonBack from "@/components/buttons/ButtonBack/ButtonBack";

export default {
  name: "LoginEmail",
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