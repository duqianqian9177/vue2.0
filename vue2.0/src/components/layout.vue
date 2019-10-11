<template>
 <div id='app'>
    <Header :userName='isNav'></Header>
    <Content></Content>
    <Footer></Footer>
 </div>
</template>

<script>
  import Header from './header.vue'
  import Content from './content.vue'
  import Footer from './footer.vue'
  export default {
     components: {
       Header,Content,Footer
     },
    data(){
      return{
       isNav:'nav'
      }
    },
  
  }
</script>
<style leng='scss'>
@import  '../assets/common.scss';
  @import  '../assets/index.scss';
</style>
