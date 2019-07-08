<template>
    <div class="search">
        <div class="search">
    <div class="search-title">
      <input type="text" name="" placeholder="输入搜索内容" v-model="searchContent">
      <button type="button" @click="searchHandler" name="button">搜索</button>
    </div>
    <ul class="list searchlist">
     <router-link :key="index" tag="li" :to="{name:'musicplay',params:{song_id:item.songid}}" class="song" v-for="(item,index) in songlist">
       <div class="left">
         <div class="info  single-line ">
             <div>
                 <span>{{ item.songname }}</span>
             </div>
             <span class="txt">{{ item.artistname }}</span>
         </div>
       </div>
     </router-link>
   </ul>
  </div>
    </div>
</template>
<script>
export default {
    name:'search',
    data(){
        return{
            searchContent:'',
            songlist:[]
        }
    },
    methods:{
        searchHandler:function(){
            const url=this.HOST+"/v1/restserver/ting?method=baidu.ting.search.catalogSug&query="+this.searchContent
            // 这里是需要的进行的$axios是在全局变量的环境中有声明的
            this.$axios.get(url)
            .then(res => {
                if(res.data.error_code == 22001){
                    alert('您所搜索的歌曲不存在！')
                }
                this.songlist = res.data.song
                console.log(this.songlist);
            })
            .catch(error => {
                alert("配置出现问题！")
            })
        }
    }
}
</script>
<style scoped>
.search-title{
  padding: 20px;
  overflow: hidden;
  clear: both;
}

input{
width: 80%;
height: 30px;
line-height: 30px;
background: #fff;
border: 1px solid #f1f2f3;
padding-left: 10px;
float: left;
display: inline-block;
}

button{
float: left;
width: 15%;
height: 30px;
}

.list {
  word-wrap: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
  word-break: break-all;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
}

.list li.song {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  min-height: 55px;
  text-align: left;
}

li{
display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 50px;
  border-bottom: 1px solid #F2F2F2;
  padding-left: 10px;
}

.list .item.song .left, .list li.song .left {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list .item .info, .list li .info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list li .info>span {
  font-weight: 400;
  display: block;
  font-size: 12px;
  color: #999;
}


</style>


