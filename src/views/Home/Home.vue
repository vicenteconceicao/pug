<template>
  <div class="container">
    <button @click="goToLogin">Login</button>
  </div>
</template>

<script>

export default {
  name: "Home",
  methods:{
    goToLogin(){
      this.$router.push("/login")
    },
  }
};
</script>

<style src="./style.scss" lang="scss" scoped />