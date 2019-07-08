<template>
    <div class="newmusic">
        <div class="title">
            <h2>新歌推荐</h2>
            <div class="more">更多</div>
        </div>
        <div class="container">
        <div class="gallery">
            <div class="scroller">
                <router-link tag="div" :to="{name:'musicplay',params:{song_id:item.song_id}} " class="card url" v-for="(item,index) in newmusic_recommand" :key="index">
                    <div class="album">
                        <img :src="item.pic_big" :alt="item.title">
                        <div class="name">{{ item.title}}</div>
                        <div class="author">{{item.author}} </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: "New_Music",
    data(){
        return {
            newmusic_recommand:[]
        }
    },
    mounted(){
        var url=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=3&offset=0"
        this.$axios.get(url)
        .then(res =>{
            console.log("我是新歌榜里面的数据："+url)
            this.newmusic_recommand=res.data.song_list
        })
        .catch(error =>{
            console.log(error);
            
        })
    }
}
</script>
<style scoped>
.newmusic{
    width: 100%;
    height: auto;
    margin-top: 10px;
    background: #ffffff;
}
.newmusic .title{
    display: flex;
    margin: 14px 0 18px 0;
}
.newmusic h2{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 20px;
}
.newmusic .more{
    width: 64px;
    font-size: 12px;
    text-align: right;
}
.newmusic .gallery{
    overflow: hidden;
    width: 100%;
    margin: 0 -5px;
}
.newmusic .gallery .card{
    width: 33.3%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 5px 10px;
}
.newmusic .gallery .album{
    position:relative;

}
.newmusic .gallery .card img{
    width: 100%;
    height: auto;
    border: 1px solid #eee;
}
.newmusic .gallery .card .name{
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    line-height: 14px;
    max-height: 28px;
    margin-bottom: 2px;
}
.newmusic .gallery .card .author{
    font-size: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    line-height: 14px;
    max-height: 28px;
    margin-bottom: 2px;
}
</style>

