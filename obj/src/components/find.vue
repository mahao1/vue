<template>
  <div class="find">
    <header>
      <p>发现</p>
    </header>
    <nav>
      <input type="text" placeholder="请输入昵称" class="txt"/>
      <input type="submit" value="搜索" class="search">
    </nav>
    <section>
      <ul class="section_t">
        <li class="section_l">
          <img src="src/assets/images/head.png"/>
          <div>
            <h4>我叫小梦</h4>
            <p>我叫小梦哈哈哈哈</p>
          </div>
        </li>
        <li class="section_rl">
          <a href="javascript:;">关注</a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    mounted(){

    }
  }
</script>
<style scoped>
  @import '../assets/css/find.css';
</style>