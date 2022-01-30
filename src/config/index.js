export default {
  title: 'KaK Vue',
  cookieExpires: 1, // one day
  useI18n: true,
  baseUrl: {
    // dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
    // pro: 'https://produce.com'
    dev: 'https://reqres.in/api/',
    pro: 'https://reqres.in/api/'
  },
  homeName: 'home',
  plugin: {
    'error-store': {
      showInHeader: true, // Set to false to not show error log logo on top
      developmentOff: true // After setting to true, no error information will be collected in the development environment, which is convenient for troubleshooting errors during development.
    }
  }
}
