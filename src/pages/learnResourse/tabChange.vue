<template>
    <div id="tab" class="tab">
        <ul>
            <li :class="currentIndex == item.id ? 'active':''" v-for="(item,index) in tabList" :key="item.id" @click="changeIndex(item.id)">
                {{item.title}}
            </li>
        </ul>
        <div :class="currentIndex == item.id ? 'active':''" v-for="(item,index) in tabList" :key="item.id">
            <img :src="item.path" :alt="item.title">
        </div>
    </div>
</template>
<style scoped>
.tab ul li{
    float: left;
    width: 50px;
    height: 50px;
    background: skyblue;
    text-align: center;
    line-height: 50px;
    font-size: 10px;
    border: 2px solid black;
}
.tab ul .active{
    background: orange;
}
.tab div{
    height: 220px;
    display: none;
    margin-top: 20px;
}
.tab div.active{
    height: 220px;
    display: block;
    margin-top: 20px;
}
.tab div img{
    width: 100%;
    height: 100%;
}
</style>
<script>
export default {
    name:'tab',
    data(){
        return{
            currentIndex: 1,
            tabList:[
                {
                    id: 1,
                    title:'猫咪1',
                    path: require("../../assets/img/b1.jpg")
                },
                {
                    id: 2,
                    title:'猫咪2',
                    path: require("../../assets/img/b2.jpg")
                },
                {
                    id: 3,
                    title:'猫咪3',
                    path: require("../../assets/img/b3.jpg")
                }
            ]
        }
    },
    methods:{
        changeIndex(index){
            this.currentIndex = index
            console.log(index)
        }
    }
}
</script>
