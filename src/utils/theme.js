import formula from '@/constant/formula.json'
import rgbHex from 'rgb-hex'
import axios from 'axios'
import color from 'css-color-function'
/**
 * 把生辰的样式表写入到style中
 */

export const writeNewStyle = (newStyle) => {}

/**
 * 根据主题色，生成最新的样式表
 */
export const generateNewStyle = async (parimaryColor) => {
  // 1、根据主题色生成色值表
  const colors = generateColors(parimaryColor)
  // 2、获取当前的element-plus 的默认样式表，并且把需要进行替换的色值打上标记
  let cssText = await getOriginalStyle()
  // 3、遍历生成的色值表，在默认样式表里进行全局替换
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(
      new RegExp('(:|\\s+)' + key, 'g'),
      '$1' + colors[key]
    )
  })

  return cssText
}

export const generateColors = (parimary) => {
  if (!parimary) return
  const colors = {
    parimary
  }
  Object.keys(formula).forEach((key) => {
    const value = formula[key].replace(/primary/g, parimary)
    colors[key] = '#' + rgbHex(color.convert(value)) //转换为16进制色值
  })
  return colors
}

/**
 * 获取当前 element-plus 的默认样式表
 */
export const getOriginalStyle = async () => {
  // 使用当前package.json的版本
  const version = require('element-plus/package.json').version
  const url = `https://unpkg.com/element-plus@${version}/dist/index.css`
  const { data } = await axios(url)
  // 把获取到的数据筛选为原样式模板
  return getStyleTemplate(data)
}

/**
 * 返回 style 的 template
 */
const getStyleTemplate = (data) => {
  // element-plus 默认色值
  const colorMap = {
    '#3a8ee6': 'shade-1',
    '#409eff': 'primary',
    '#53a8ff': 'light-1',
    '#66b1ff': 'light-2',
    '#79bbff': 'light-3',
    '#8cc5ff': 'light-4',
    '#a0cfff': 'light-5',
    '#b3d8ff': 'light-6',
    '#c6e2ff': 'light-7',
    '#d9ecff': 'light-8',
    '#ecf5ff': 'light-9'
  }
  // 根据默认色值为要替换的色值打上标记
  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key]
    // 比如将data中#409eff 替换为primary
    data = data.replace(new RegExp(key, 'ig'), value)
  })
  return data
}
