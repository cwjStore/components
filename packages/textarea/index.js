import wjText from './src/index.vue'

wjText.install = function(Vue){
    Vue.component(wjText.name,wjText)
}

export default wjText