const state = {
  userInfo: {
    name: '',
    age: '',
    sex: '',
    address: '',
    loginId: '',
    dept: ''
  }
}

const mutations = {
  saveUserInfo(state, payload) {
    state.userInfo = payload
  }
}

const getters = {
  userInfo(state) {
    return state.userInfo
  },
  loginId(state) {
    if (state.userInfo) {
      return state.userInfo.loginId
    }
  }
}

export default {
  state,
  mutations,
  getters
}