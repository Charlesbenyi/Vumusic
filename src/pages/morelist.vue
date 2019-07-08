<template>
    <div class="more-list">
      <div class="wrapper">
        <h3>{{ this.$route.params.title }}</h3>
        <VuePullRefresh :on-refresh="onRefresh">
        <router-link tag="div" :to="{name:'musicplay',params:{song_id:item.song_id}} " class="info url log" v-for="(item,index) in moreListData" :key="index">
              <div class="poster">
                  <img :src="item.pic_big" :alt="item.title">
              </div>
              <div class="text-wrap">
                  <div class="title">{{ item.title }}</div>
                  <div class="author">{{ item.artist_name }}</div>
              </div>
        </router-link>
        </VuePullRefresh>
      </div>
    </div>
</template>
<script>
import VuePullRefresh from 'vue-pull-refresh'

export default {
    name: 'morelist',
    data(){
        return {
            moreListData:[],
            offset: 0
        }
    },
    components:{
        VuePullRefresh
    },
    mounted(){
        var url=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+ this.$route.params.type +"&size=12&offset=0";
        console.log(url)
        this.$axios.get(url)
        .then(res =>{
            console.log(res.data.song_list)
            this.moreListData=res.data.song_list
        })
        .catch(error =>{
            console.log(error);
        })
    },
    methods:{
        onRefresh: function(){
            var that=this;
            var moreListUrl=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+ this.$route.params.type +"&size=12&offset="+this.offset;
            return new Promise(function (resolve,reject){
                setTimeout(()=>{
                    that.$axios.get(moreListUrl)
                    .then(res=>{
                        console.log(res.data);
                        if(that.offset >= res.data.billboard_songnum-12 ){
                            that.offset=0;
                            console.log("重新刷新")
                        } else{
                            that.offset +=12
                        }
                        that.moreListData=res.data.song_list
                        resolve()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                })
            })
        }
    }
}
</script>
<style scoped>
 .wrapper {
    padding-top: 13px;
    text-align: center;
    margin-bottom: 10px;
    background: #fff;
    clear: both;
    overflow: hidden;
}

h3{
  font-size: 22px;
  text-align: left;
  margin-left: 17px;
  margin-bottom: 5px;
}
.wrapper .poster{
    margin: 0 auto;
    border-radius: 50%;
}
.wrapper .info {
    font-size: 12px;
    width: 42%;
    height: 184.133px;
    float: left;
    padding-left: 17px;
    margin-bottom: 30px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}
</style>


