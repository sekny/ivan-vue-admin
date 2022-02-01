export default {
  title: 'Admin Vue',
  cookieExpires: 1, // one day
  useI18n: true,
  baseUrl: {
    // dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
    // pro: 'https://produce.com'
    dev: 'http://10.215.117.196:8080/payment-service/api/1.0/',
    pro: 'https://reqres.in/api/'
  },
  homeName: 'home',
  plugin: {
    'error-store': {
      showInHeader: true, // Set to false to not show error log logo on top
      developmentOff: true // After setting to true, no error information will be collected in the development environment, which is convenient for troubleshooting errors during development.
    }
  },
  loadingConfig: {
    height: 5,
    failedColor: '#ed4014',
    color: '#F99E19'
  }
}
