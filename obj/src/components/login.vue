<template>
  <div class="login">
    <header>
      <a href="javascript:window.history.back();"><i class="iconfont">&#xe649;</i></a>
      <p>足球圈 — 登录</p>
    </header>
    <section>
      <form action="" method="post" class="section_login">
        <p>手机号<input type="text" name="phone" /></p>
        <p>密码<input type="text" name="password" /></p>
        <div>还没有账号？点击此处立即
          <!--<a href="reg.html">注册</a>-->
          <router-link to="/reg">注册</router-link>
        </div>
        <input type="submit" value="提  交" class="btn"/>
      </form>
    </section>
  </div>
</template>
<script></script>
<style scoped>
  @import '../assets/css/login.css';
</style>