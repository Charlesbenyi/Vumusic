<template>
    <div class="hot">
        <music_list :url="url" />
    </div>
</template>
<script>
import Music_list from '../../components/Music_list.vue'

export default {
    name: 'hot',
    data(){
        return {
            url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=5&offset=0"
        }
    },
    components:{
        Music_list
    }
}
</script>
<style scoped>

</style>


