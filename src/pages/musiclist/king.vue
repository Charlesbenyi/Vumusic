<template>
    <div class="king">
        <Musiclist :url="url" />
    </div>
</template>
<script>
import Musiclist from '../../components/Music_list'
export default {
    name: 'king',
    data(){
        return {
            url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=11&size=5&offset=0"
        }
    },
    components:{
        Musiclist
    }
}
</script>
<style scoped>

</style>
