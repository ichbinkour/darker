// DARKER COMPONENTS
import DarkerAlert from "./components/darker/DarkerAlert.vue"


function install(Vue, options) {
  if (install.installed) {
    return
  } else {
    install.installed = true
  }

  const components = {
    alert: DarkerAlert
  }

  for (let component in components) {
    if (!options || !options.components || options.components.length === 0 || options.components.includes(component)) {
      Vue.component("gb-" + component, components[component])
    }
  }

  if (!Vue.prototype.$gb) {
    Vue.prototype.$gb = {}
  }

  Vue.prototype.$gb.vuedarkmode = {}
  Vue.prototype.$gb.vuedarkmode.theme = (options || {}).theme || "dark"
}

const plugin = {
  install
}

let GlobalVue = null

if (typeof window !== "undefined") {
  GlobalVue = window.Vue
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin

export {
  DarkerAlert
}
