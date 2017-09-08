<template>
  <div id="app">
    <my-header></my-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader/myheader'
import tab from '@/components/tab/tab'
export default {
  name: 'app',
  components: {
    myHeader,
    tab
  }
}
</script>

<style>

</style>

