<template>
  <main>
    <div class="home-content">
      <div class="buttons">
        <input placeholder="Informe o Código" />
        <button>Novo Grupo</button>
        <button @click="goToGroups">Entrar</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods:{
      goToGroups(){
           this.$router.push("/groups");
      }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped />