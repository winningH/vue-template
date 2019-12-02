import HelloWorld from './HelloWorld.vue'

const components = [
  HelloWorld
]

const BaseComponents = function (Vue) {
  if (BaseComponents.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default BaseComponents
