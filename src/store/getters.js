import variables from '@/styles/variables.module.scss'
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  avatar: (state) => state.user.userInfo.staffPhoto,
  cssVar: (state) => variables,
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
  mainColor: (state) => state.theme.mainColor
}

export default getters
