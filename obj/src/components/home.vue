<template>
  <div class="home">
    <navbar></navbar>
    <section class="section">
      <figure class="figure" v-for="(item,index) in arr">
        <img :src="item.img" />
        <figcaption>{{item.id}}.{{item.title}}</figcaption>
      </figure>
    </section>
  </div>
</template>
<script>
  import navbar from './navbar.vue';
  export default {
      data(){
        return {
          arr: []
        }
      },
      components: {
        navbar
      },
      mounted(){
        this.$http.get('src/data/home.json').then((res) => {
          this.arr = res.data;
        }).catch((res) => {
          alert(res.status);
        });
      }
  }
</script>
<style></style>