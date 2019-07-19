<template>
  <footer class="footer">
      <a href="javascript:;" class="footer-item"  @click="goTo('/home')">
        <span class="item_icon " :class="{on: $route.path === '/home'}" >
            <i class="iconfont icon-fangzi"></i>
        </span>
        <span :class="{on: $route.path === '/home'}" >首页</span>   
      </a>
      <a href="javascript:;" class="footer-item"  @click="goTo('/categories')">
        <span class="item_icon " :class="{on: $route.path === '/categories'}">
            <i class="iconfont icon-guizi"></i>
        </span>
        <span :class="{on: $route.path === '/categories'}">分类</span>
      </a>
      <a href="javascript:;" class="footer-item" @click="goTo('/recommend')">
        <span class="item_icon" :class="{on: $route.path === '/recommend'}">
            <i class="iconfont icon-thumb" ></i>
        </span>
        <span :class="{on: $route.path === '/recommend'}">识物</span>
      </a>
      <a href="javascript:;" class="footer-item" @click="goTo('/shopCart')">
        <span class="item_icon" :class="{on: $route.path === '/shopCart'}">
            <i class="iconfont icon-gouwuche"></i>
        </span>
        <span :class="{on: $route.path === '/shopCart'}">购物车</span>
      </a>
      <a href="javascript:;" class="footer-item" @click="goTo('/profile')">
        <span class="item_icon" :class="{on: $route.path === '/profile'}">
            <i class="iconfont icon-ren"></i>
        </span>
        <span :class="{on: $route.path === '/profile'}">个人</span>
      </a>
  </footer>
</template>
<script type="text/ecmascript-6">
  export default {
      name:'Footer',
      methods:{
          goTo(path){
              this.$router.replace(path)
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .footer
        position fixed
        bottom 0
        left 0
        width 100%
        height 98px
        background #fff
        display flex
        z-index 100
        box-sizing border-box
        .footer-item
            display flex
            flex 1
            flex-direction column
            align-items center
            span
                font-size 24px
                color #666666
                display inline-block
                margin 5px
                &.on
                    color #b4282d  
                .iconfont
                    font-size 42px
                      

            
</style>
