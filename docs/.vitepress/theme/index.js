import theme from 'vitepress/dist/client/theme-default/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
    ...theme,
    enhanceApp({ app }) {
        app.use(ElementPlus)
    }
}
