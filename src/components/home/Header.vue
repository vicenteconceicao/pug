<template>
  <header>
    <div class="header-content">
      <span class="header-logo">Meu amigo secreto é!</span>
      <span class="header-language">Idioma do site: Português</span>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  width: 100%;
  position: fixed;
  color: #ffffff;
  top: 0;
  z-index: 2;
  .header-content {
    min-height: 70px;
    max-width: 1065px;
    margin: 0 auto;
    padding: 0 20px;
    .header-logo {
      margin-top: 18px;
      float: left;
    }
    .header-language {
      margin-top: 18px;
      float: right;
    }
  }
}
</style>