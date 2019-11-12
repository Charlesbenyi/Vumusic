<template>
    <div class="ucenter">
       <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        :cell-style = "cellcss">
        <el-table-column
        prop="date"
        label="日期"
        width="180">
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址">
        </el-table-column>
    </el-table>
    <TabChange></TabChange>
    <my-echart></my-echart>
    </div>
</template>
<script>
import TabChange from './learnResourse/tabChange'
import MyEchart from './learnResourse/eachartsLearn'
export default {
    name: 'ucenter',
    components: {
      TabChange,
      MyEchart
    },
    data(){
        return{
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }]
        }
    },
    methods:{
        tableRowClassName(row) {
        if (row.rowIndex === 1) {
          return 'warning-row';
        } else if (row.rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      cellcss(row){
          if(row.rowIndex == 2){
              return{
                  color:'red',
                  background:"black"
              }
          }
      }
    }
}
</script>
<style scoped>
.el-table .warning-row {
    background: oldlace;
    color: red;
  }

.el-table .success-row {
    background: #f0f9eb;
    color: blue;
}
</style>

