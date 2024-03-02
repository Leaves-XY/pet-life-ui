<template>
  <el-row style="padding-top: 20px">
    <el-col style="border-right: 1px solid rgba(64,75,82,0.87)" :span="12"> <el-tag style="margin-left: 80px">领养情况</el-tag> <ve-pie :data="chartData1"></ve-pie> </el-col>
    <el-col :span="12"> <el-tag style="float: right;margin-right: 80px">寻宠情况</el-tag> <ve-pie :data="chartData2"></ve-pie> </el-col>
    <el-col style="margin-top: 40px"> <el-tag style="margin-left: 80px">每日发布情况</el-tag> <ve-line :data="chartData3"></ve-line> </el-col>
  </el-row>
</template>

<script>
import VeLine from 'v-charts/lib/line'
import VePie from 'v-charts/lib/pie'
import { adoptStatistics, findStatistics, petReleaseStatisticsForDate } from "@/api/adopt/index";
export default {
  data() {
    return {
      chartData1: {
        columns: ['name', 'total'],
        rows: []
      },
      chartData2: {
        columns: ['name', 'total'],
        rows: []
      },
      chartData3: {
        columns: ['dateTime', '发布领养', '发布寻宠'],
        rows: []
      }
    }
  },
  created () {
    this.getAdopt()
    this.getFind()
    this.statisticsForDate()
  },
  components: { VeLine, VePie },
  methods: {
    getAdopt() {
      adoptStatistics().then(res => {
        this.chartData1.rows = res.data
      });
    },
    getFind() {
      findStatistics().then(res => {
        this.chartData2.rows = res.data
      });
    },
    statisticsForDate() {
      petReleaseStatisticsForDate().then(res => {
        this.chartData3.rows = res.data
      });
    }
  }
}
</script>
