import { App } from 'vue'
import ElContainer from './Container.vue'
import ElHeader from './Header.vue'
import ElAside from './Aside.vue'
import ElMain from './Main.vue'
import ElFooter from './Footer.vue'

export default {
  install(app:App){
    app.component(ElContainer.name, ElContainer)
    app.component(ElHeader.name, ElHeader)
    app.component(ElAside.name, ElAside)
    app.component(ElMain.name, ElMain)
    app.component(ElFooter.name, ElFooter)
  }
}