<template>
  <input @click="goToPass" type="email" placeholder="email@email.com" />
  <button @click="goToCreate" class="btn-enter">Entrar</button>
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
    },
    goToCreate(){
      this.$router.push("/group/signup");
    }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped />