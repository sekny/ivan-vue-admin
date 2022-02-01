<template>
  <div>
        <Card shadow>
            <p slot="title">Service Module</p>
            <Row>
            <Col :xs="{ span: 24 }" :lg="{ span: 22 }">
            </Col>
            <Col :xs="{ span: 24 }" :lg="{ span: 2 }" type="flex" justify="end">
                <Button long type="primary" @click="onCreate" icon="ios-add-circle-outline">Add</Button>
            </Col>
            </Row>
            <Divider />
            <Table :columns="table.column" :data="table.data" :size="'small'"></Table>
        </Card>

        <Modal v-model="showModal"
            :closable="false"
            :mask-closable="false"
            :title="'Tree Test'">
            <div>
                
            </div>

            <div slot="footer">
                <Button type="text" @click="onCancel">Cancel</Button>
                <Button type="primary" :loading="modal_loading" @click="onSave">Save</Button>
            </div>
        </Modal>
  </div>
</template>
<script>
export default {
    name: 'role',
    data () {
        return {
            showModal: false,
            table: {
        column: [
          {
            key: "id",
            title: "Id",
          },
          {
            key: "name",
            title: "Name",
          }
        ],
        data: [
          {
            id: 1,
            name: 'Admin'
          },
          {
            id: 2,
            name: 'User'
          },
          {
            id: 3,
            name: 'Readonly'
          },
        ]
      },
        }
    }
    
}
</script>
<style lang="less">
</style>
