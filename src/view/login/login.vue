<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" :title="$t('login')" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip"> {{ $t('fill_useranme_and_password_desc') }} </p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
import { Spin } from 'iview'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      Spin.show()
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      }).catch(res => {
        var errorMessage = 'Invalid username or password'
        if (res.response && res.response.data && res.response.data.error) {
          errorMessage = res.response.data.error
        }
        this.$Message.error(errorMessage)
      }).finally(() => {
        Spin.hide()
      })
    }
  }
}
</script>

<style>

</style>
