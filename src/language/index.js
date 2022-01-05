import { createI18n } from "vue-i18n"

import zh from "./zh"
import en from "./en"

// 语言库
const messages = {
    'zh': zh,
    'en': en
}

const langDefault = "en"
const i18n = createI18n({
    locale: langDefault,
    messages
})

export default i18n //对外暴露 i18n, 在 main.js 中挂载