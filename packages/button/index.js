import wjButton from './src/index.vue'

wjButton.install = function(Vue){
    Vue.component(wjButton.name,wjButton)
}

export default wjButton