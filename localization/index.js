// Import the localization package.
import libTranslate from 'translate.js'
import { default as config } from '../config'

// Import the language files.
import { default as english } from './en'
import { default as french } from './fr'
import { default as chinese_simplified } from './zh-cn'

var locales = {
  'en': english,
  'fr': french,
  'zh-cn':chinese_simplified
};

var t = libTranslate.getTranslationFunction(locales[config.locale])

export default t
