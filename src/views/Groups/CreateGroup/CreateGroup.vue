<template>
  <div class="container">
      <input placeholder="Nome do Grupo" />
      <input placeholder="Data do Sorteio" />
      <input placeholder="Data da Revelação" />
      <input placeholder="E-mail" />
      <button class="btn-create">Criar</button>
      <ButtonBack />
  </div>
</template>

<script>
import ButtonBack from '@/components/buttons/ButtonBack/ButtonBack'
export default {
  components:{
    ButtonBack
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />