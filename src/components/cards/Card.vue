<template>
  <div class="card">
    <div class="card-avatar">
      <div class="avatar"></div>
    </div>
    <div class="card-info">
      <span class="card-title">Turma X do Colégio</span>
      <span class="card-subtitle">Participantes: 12</span>
      <span class="card-footer">Data do Sorteio: 24 de Dez de 2020</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_index.scss";

.card {
font-family: Calibri, Arial, Helvetica, sans-serif;
  display: flex;
  background-color: $white;
  color: $grey-600;
  padding: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05) !important;
  margin-top: 0.5rem;
  .card-avatar {
    .avatar {
      @include group-avatar;
      margin-right: 1rem;
    }
  }
  .card-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .card-title{
      font-weight: 600;
      text-transform: uppercase;
    }
  }
}
</style>