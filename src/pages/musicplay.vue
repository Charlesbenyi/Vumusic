<template>
   <div class="play">
    <div class="header">
     <div class="title">
       <router-link to="/">
         <i class="iconfont icon-shouye left"></i>
       </router-link>
       <div class="music-info">
         <p>{{currentUrl.songinfo.title}} </p>
         <p class="author">{{currentUrl.songinfo.author}} </p>
       </div>
       <router-link to="/search"><i class="iconfont icon-sousuo right"></i></router-link>
     </div>
     <p>{{this.$route.params.song_id}} </p>
     <div class="song-info">
       <div class="song-info-img">
         <img :src="currentUrl.songinfo.pic_big">
       </div>
     </div>
     <div class="song">
      <audio ref="player" :src="currentUrl.bitrate.show_link" controls autoplay></audio>
		</div>
     <!-- <div class="song-info">
			<div class="song-info-img">
        <img :src="currentUrl.songinfo.pic_big">
			</div>
      <p>{{this.$route.params.songid}} </p> -->
			<!-- <div class="iconbox">
				<i class="iconfont icon-shoucang2 left"></i>
				<i class="box"></i>
				<i class="iconfont icon-xiazai right"></i>
			</div>
		</div>
    <div class="song">
      <audio ref="player" :src="currentUrl.bitrate.show_link" controls autoplay></audio>
		</div> -->
   </div>
   </div>
</template>
<script>
import "../assets/font/iconfont.css"

export default {
    name: 'musicplay',
    data(){
      return {
        currentUrl:{
        songinfo:{
          title:"",
          author:""
        },
        bitrate:{
          show_link:""
        }
      },
      currentTime:0,
      durationTime:0
      }
    },
    mounted(){
      var playurl=this.HOST+"/v1/restserver/ting?method=baidu.ting.song.play&songid=" + this.$route.params.song_id;
      console.log(playurl);
      this.$axios.get(playurl)
      .then(res =>{
        this.currentUrl=res.data;
        console.log(res.data)
      })
      .catch(error => {
        // console.log("歌曲读取错误！");
        // console.log("位于musicplay！");
        console.log(error)
      })
    }
}
</script>


<style scoped>
.header{
	padding:15px;
}

.music-info{
	flex: 1;
	font-size: 20px;
}

.title{
	display: flex;
	text-align: center;
}

.left{
	font-size: 30px;
}

.ca{
  color: red;
}

.right{
	font-size: 30px;
}

.song-info{
	padding: 15px;
}

.song-info-img{
	text-align: center;
}

.song-info-img img{
	width: 50%;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(50,50,50,.31);
}

.song-lrc{
	margin-top: 10px;
  min-height: 50px;
}

.iconbox{
	display: flex;
	margin-top: 30px;
}

.iconbox .box{
	flex: 1;
}

.song{
	width: 100%;
	text-align: center;
}

.song audio{
	width: 80%;
}

.active{
  color: #222;
}

.author{
  font-size: 12px;
  color: #999;
}
</style>

