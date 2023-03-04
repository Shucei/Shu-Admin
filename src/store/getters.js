import variables from '@/styles/variables.module.scss'
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  avatar: (state) => state.user.userInfo.staffPhoto,
  cssVar: (state) => variables,
  sidebarOpened: (state) => state.app.sidebarOpened
}

export default getters
