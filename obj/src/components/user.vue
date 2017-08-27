<template>
  <div class="user">
    <header>
      <a href="javascript:window.history.back();"><i class="iconfont">&#xe649;</i></a>
      <p>个人中心</p>
    </header>
    <section v-for="(item,index) in arr">
      <ul class="section_tt">
        <li class="section_ll">
          <img :src="item.img_head"/>
          <div>
            <h4>{{item.title}}</h4>
            <p>{{item.des}}</p>
          </div>
        </li>
        <li class="section_bb">
          <a href="javascript:;">{{item.photo}}（{{item.photo_num}}）</a>
          <a href="javascript:;">{{item.gz}}（{{item.gz_num}}）</a>
          <a href="javascript:;">{{item.fans}}（{{item.fans_num}}）</a>
        </li>
        <li><img :src="item.photo_img" alt=""></li>
      </ul>
    </section>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        arr: []
      }
    },
    mounted(){
      this.$http.get('src/data/user.json').then((res)=>{
        this.arr = res.data;
      }).catch((res)=>{
        alert(res.status);
      });
    }
  }
</script>
<style scoped>
  @import '../assets/css/user.css';
</style>