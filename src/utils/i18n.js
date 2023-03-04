/**
 * 将路由的title转换
 */
import i18n from '@/i18n'
export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}
