<template>
 <header class="header">
    <div class="headerContent">
        <a href="javascript:;" class="logo"></a>
        <div class="headerSearch">
            <i class="iconfont icon-sousuo"></i>
            <span class="placeholder ellipsis">搜索商品, 共21768款好物</span>
        </div>
        <div class="loginBtn">登录</div>
    </div>
 </header>
</template>
<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
    .header
        position relative
        width 100%
        height 150px
        background #ffffff
        z-index 100
        .headerContent
            display flex
            align-items center
            padding 15px 30px
            .logo
                display inline-block
                width 138px
                height 40px
                background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
                background-repeat no-repeat
                background-size 100% 100%
                margin-right 20px
            .headerSearch
                width 442px  
                height 56px
                background #ededed
                font-size 28px
                color #666
                text-align center
                line-height 56px
                border-radius 6px
                .iconfont
                    margin-right 10px
            .loginBtn
                width 74px
                height 40px
                text-align center
                line-height 40px
                border 1px solid #b4282d
                color #b4282d
                border-radius 4px
                font-size 24px
                margin-left 15px
 
</style>
