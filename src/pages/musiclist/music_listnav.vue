<template>
    <div class="music-nav">
        <div class="log url hd">
            <h2>音乐榜单</h2>
            <div>更多</div>
        </div>
        <ul>
        <li>
            <router-link to="/home/hot">热歌榜</router-link>
            <span class="gap-line"> </span>
        </li>
        <li>
            <router-link to="/home/newsong">新歌榜</router-link>
            <span class="gap-line"> </span>
        </li>
        <li>
            <router-link to="/home/king">King榜</router-link>
            <span class="gap-line"> </span>
        </li>
    </ul>
    <keep-alive>
        <router-view/>
    </keep-alive>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.music-nav{
    padding: 10px 0;
    background: #ffffff;
    width: 100%;
}
.music-nav .hd{
    width: 100%;
    display: flex;
}
.music-nav .hd h2{
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
    flex: 1;
    font-size: 20px;
}
.music-nav .hd div{
    width: 60px;
    font-size: 12px;
}
ul{
    display: flex;
}
ul li {
    padding: 18px 0 12px 0;
    font-size: 16px;
    flex: 1;
    text-align: center;
    color: #999999;
    position: relative;
    z-index: 2;
}
</style>

