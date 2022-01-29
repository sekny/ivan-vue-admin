<style lang="less">
    @import "./common.less";
</style>
<template>
  <div>
    <Card title="Export EXCEL">
      <Row>
        <Button icon="md-download" :loading="exportLoading" @click="exportExcel">export file</Button>
      </Row>
    </Card>
    <Row class="margin-top-10">
      <Table :columns="tableTitle" :data="tableData"></Table>
    </Row>
  </div>
</template>
<script>
import excel from '@/libs/excel'
export default {
  name: 'export-excel',
  data () {
    return {
      exportLoading: false,
      tableTitle: [
        {
          title: 'Category 1',
          key: 'category1'
        },
        {
          title: 'Category 2',
          key: 'category2'
        },
        {
          title: 'Category 3',
          key: 'category3'
        }
      ],
      tableData: [
        {
          category1: 1,
          category2: 2,
          category3: 3
        },
        {
          category1: 4,
          category2: 5,
          category3: 6
        },
        {
          category1: 7,
          category2: 8,
          category3: 9
        }
      ]
    }
  },
  methods: {
    exportExcel () {
      if (this.tableData.length) {
        this.exportLoading = true
        const params = {
          title: ['Category 1', 'Category 2', 'Category 3'],
          key: ['category1', 'category2', 'category3'],
          data: this.tableData,
          autoWidth: true,
          filename: 'Category List'
        }
        excel.export_array_to_excel(params)
        this.exportLoading = false
      } else {
        this.$Message.info('Table data cannot be empty!')
      }
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
