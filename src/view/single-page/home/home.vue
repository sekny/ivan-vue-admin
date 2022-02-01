<template>
  <div>
    <!-- <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="24" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="barData" text="Weekly user activity"/>
        </Card>
      </i-col>
    </Row> -->
  </div>
</template>

<script>
// import InforCard from '_c/info-card'
// import { ChartPie, ChartBar } from '_c/charts'
// import Example from './example.vue'
export default {
  name: 'home',
  // components: {
  //   InforCard,
  //   ChartPie,
  //   ChartBar,
  //   Example
  // },
  data () {
    return {
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
