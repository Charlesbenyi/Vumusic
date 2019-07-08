<template>
    <div class="home">
        <Todayrecommand/>
        <Newmusicrecommand/>
        <SwiperBanner/>
        <Musiclistnav/>
        <Todayrecommand :title="title" :url="url" :type="type" />
    </div>
</template>
<script>
import Todayrecommand from "../components/today_recommand"
import Newmusicrecommand from  "../components/New_Music"
import SwiperBanner from  "../components/Swiper_Banner"
import Musiclistnav from "./musiclist/music_listnav"

export default {
    name: "home",
    data(){
        return{
            title: "热歌风云",
            url: "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=24&size=6&offset=0",
            type: "24"
        }
    },
    components:{
        Todayrecommand,
        Newmusicrecommand,
        SwiperBanner,
        Musiclistnav
    }   
}
</script>
<style scoped>

</style>