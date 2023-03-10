export default {
  install(app, options) {
    defineDirective(app)
  }
}

// 定义指令(图片懒加载)
const defineDirective = (app) => {
  app.directive('lazy', {
    mounted(el, binding, vnode) {
      el.onerror = function () {
        el.src = 'https://i.gtimg.cn/club/item/face/img/2/16022_100.gif'
      }
      el.src = binding.value
    }
  })
}
