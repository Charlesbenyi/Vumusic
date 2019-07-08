<template>
    <div class="new_song">
        <Musiclist :url="url"/>
    </div>
</template>
<script>
import Musiclist from "../../components/Music_list"
export default {
    name: "new_song",
    data(){
        return{
            url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=5&offset=0"
        }
    },
    components:{
        Musiclist
    }
}
</script>
<style scoped>

</style>