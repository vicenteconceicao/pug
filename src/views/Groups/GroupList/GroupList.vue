<template>
  <div class="group-list" key="group-list">
    <h1>GRUPOS</h1>
    <Card v-for="n in number" :key="n" />
    <div class="buttons">
        <button @click="goToCreate" class="create">Criar</button>
        <button @click="goOut" class="logout">Sair</button>
    </div>
  </div>
</template>

<script>
import Card from '@/components/cards/Card'
export default {
  data() {
    return{
      number: 4
    }
  },
  components:{
    Card
  },
  methods: {
    goOut(){
      this.$router.push('/');
    },
    goToCreate(){
      this.$router.push('/create');
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />