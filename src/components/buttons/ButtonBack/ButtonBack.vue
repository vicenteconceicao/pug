<template>
    <button @click="goBack">Voltar</button>
</template>

<script>

export default {
  methods:{
    goBack(){
      this.$router.go(-1)
    },
  }
};
</script>

<style src="./style.scss" lang="scss" scoped />