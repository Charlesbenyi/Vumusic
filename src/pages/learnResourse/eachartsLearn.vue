<template>
    <div ref="echart" class="echart">

    </div>
</template>
<style scoped>
    .echart{
        width: 300px;
        height: 300px;
    }
</style>
<script>
import echart from 'echarts'
export default {
    name:'ecahrtlearn',
    data(){
        return{
            
        }
    },
    methods:{
        drawChart(){
            var container = this.$refs.echart
            var mychart = echart.init(container)
            console.log(mychart)
            mychart.setOption({
                title:{text:'Vue中首次使用echarts'},
                tooltip:{

                },
                animation:false,
                xAxis:{
                    data:[
                        '衬衫',
                        '羊毛衫',
                        '毛线衣',
                        '裤子',
                        '高跟鞋',
                        '袜子'
                    ]
                },
                yAxis:{},
                graphic: [
                    {
                        type: 'image',
                        id: 'logo',
                        right: 20,
                        top: 20,
                        z: -10,
                        bounding: 'raw',
                        origin: [75, 75],
                        style: {
                            image: 'http://echarts.baidu.com/images/favicon.png',
                            width: 150,
                            height: 150,
                            opacity: 0.4
                        }
                    }
                ],
                series:[{
                    name:'销量',
                    type:'line',
                    data: [5,20,36,10,10,20],
                    color:'blue',
                    emphasis:{
                        itmeStyle:{
                            color:'blue'
                        }
                    }
                },
                {
                    name:'价格升降',
                    type:'line',
                    data: [15,22,3,10,12,21],
                    color:'blue',
                    emphasis:{
                        itmeStyle:{
                            color:'blue'
                        }
                    }
                }]
            })
        }
    },
    mounted(){
        this.drawChart()
    }
}
</script>

