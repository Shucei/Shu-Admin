import { getItem, setItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem('lang') || 'zh'
  }),
  mutations: {
    /**
     * 侧边栏伸缩变量控制
     */
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    /**
     * 设置国际化
     */
    setLanguage(state, lang) {
      setItem('lang', lang)
      state.language = lang
    }
  },
  actions: {}
}
