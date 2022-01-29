<template>
  <div>
    <Card>
      iview-admin will automatically collect errors in your program, and you can send the error log to the backend to save. If you don't need this function, just delete the 'error-store' attribute of the plugin in './src/config/index.js'.
       In addition, in the development environment, the errors in your program will be collected, which may not help you to troubleshoot errors. You can set the 'developmentOff' of 'error-store' in './src/config/index.js' to set true.
       If you just want to collect error logs and do not want logged-in users to see the error log, you can not provide an entry to view the log, just add the 'showInHeader' of 'error-store' in './src/config/index.js' Set to false.
    </Card>
    <Card style="margin-top: 20px;">
      <Row>
        <i-col span="8">
          <Button @click="click" style="display: block">Click Test Trigger Error</Button>
          <Button @click="ajaxClick" style="margin-top:10px;">Click test to trigger ajax interface request error</Button>
        </i-col>
        <i-col span="16">
          The ajax interface request is a non-existent interface for requesting easy-mock, so the server will report a 404 error, and the error collection mechanism will collect this error. There is a certain network delay during testing, so it will be collected after a while after clicking the button. Mistake.
        </i-col>
      </Row>
    </Card>
  </div>
</template>

<script>
import { errorReq } from '@/api/data'
export default {
  name: 'error_store_page',
  methods: {
    click () {
      console.log(admin)
    },
    ajaxClick () {
      errorReq()
    }
  }
}
</script>

<style>

</style>
