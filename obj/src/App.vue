<template>
  <div id="app">
    <headbar v-show="getHead"></headbar>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <!--内容一致，无需加载-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <footbar v-show="getFoot"></footbar>
  </div>
</template>

<script>

  import headbar from './components/headbar.vue';
  import footbar from './components/footbar.vue';
  import {mapActions,mapGetters} from 'vuex';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    $route(to){
      console.log(to.path);
      this.changeRoute(to.path);
    }
  },
  mounted(){
    console.log(this.$route.path);
    this.changeRoute(this.$route.path);
  },
  methods: {
    changeRoute(path){
      path = path.substring(1);
      if(path=='home' || path=='follow'){
        this.$store.dispatch('showHead');
        this.$store.dispatch('showFoot');
      }
      if(path=='find' || path=='user'){
        this.$store.dispatch('hideHead');
        this.$store.dispatch('showFoot');
      }
      if(path=='login' || path=='reg'){
        this.$store.dispatch('hideHead');
        this.$store.dispatch('hideFoot');
      }
    }
  },
  components: {
    headbar,footbar
  },
  computed: mapGetters(
    ['getHead','getFoot']
  )
}
</script>
<style>
  @import 'assets/css/index.css';
  @import 'assets/css/common.css';
</style>
