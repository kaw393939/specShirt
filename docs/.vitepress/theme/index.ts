import DefaultTheme from 'vitepress/theme'
import DocReview from './components/DocReview.vue'
import './style.css'
export default { extends: DefaultTheme, enhanceApp({ app }) { app.component('DocReview', DocReview) } }
