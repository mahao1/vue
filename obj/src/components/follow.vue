<template>
  <section class="section_f">
    <div class="section_hf" v-for="(item,index) in arr">
      <ul class="section_lf">
        <li class="section_rf">
          <img :src="item.img_head"/>
          <div>
            <h4>{{item.title}}</h4>
            <p>{{item.des}}</p>
          </div>
        </li>
        <li class="section_rlf">
          <span>{{item.zan}}</span>
          <i class="iconfont">&#xe6bf;</i>
        </li>
      </ul>
      <figure>
        <img :src="item.img" />
        <p>{{item.char}}</p>
      </figure>
    </div>
  </section>
</template>
<script>
  export default {
    data(){
      return {
        arr: []
      }
    },
    mounted(){
      this.$http.get('src/data/follow.json').then((res) => {
//        console.log(res.data);
        this.arr = res.data;
      }).catch((res) => {
        alert(res.status);
      });
    }
  }
</script>
<style scoped>
  @import '../assets/css/follow.css';
</style>