<template>
  <nav class="nav">
    <ul>
      <!--<li class="green"><a href="index1.html">足球现场</a></li>-->
      <!--<li><a href="index2.html">足球生活</a></li>-->
      <!--<li><a href="index3.html">足球美女</a></li>-->
      <router-link tag="li" to="/home" active-class="green">
        <a href="javascript:;">足球现场</a>
      </router-link>
      <router-link tag="li" to="/life" active-class="green">
        <a href="javascript:;">足球生活</a>
      </router-link>
      <router-link tag="li" to="/girl" active-class="green">
        <a href="javascript:;">足球美女</a>
      </router-link>

    </ul>
  </nav>
</template>
<script>
  export default {
    data(){
      return {}
    },
    mounted(){
      $(function(){
        $('.header ul li a').eq(0).css();
        $('footer ul li a').eq(0).css({'color':'#0dc13c'});
        $('.header ul li a').eq(0).click(function(){
          $('.header ul li a').eq(0).css({'color':'white'});
          $('footer ul li').eq(0).css({'color':'#0dc13c'});
        });
        $('.header ul li a').eq(1).click(function(){
//          $(this).addClass('white').siblings().removeClass('white');
          $('.header ul li a').eq(0).css({'color':'#a4ecbc'});
          $('footer ul li a').eq(0).css({'color':'#0dc13c'});
        });
      });
    }
  }
</script>
<style>

</style>