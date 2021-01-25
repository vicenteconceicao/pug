<template>
  <div class="groups">
    <HeaderBar />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from '@/components/template/HeaderBar/HeaderBar'
export default {
  components: {
    HeaderBar
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />