import DefaultTheme from 'vitepress/theme'
import DocReview from './components/DocReview.vue'
import ReviewQueue from './components/ReviewQueue.vue'
import './style.css'
export default { extends: DefaultTheme, enhanceApp({ app }) { app.component('DocReview', DocReview); app.component('ReviewQueue', ReviewQueue) } }
