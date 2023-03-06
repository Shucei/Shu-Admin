import variables from '@/styles/variables.module.scss'
import { MAIN_COLOR } from '@/constant'
import { getItem } from '@/utils/storage'
import { generateColors } from '@/utils/theme'
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  avatar: (state) => state.user.userInfo.staffPhoto,
  cssVar: (state) => {
    return {
      ...variables,
      ...generateColors(getItem(MAIN_COLOR))
    }
  },
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
  mainColor: (state) => state.theme.mainColor
}

export default getters
