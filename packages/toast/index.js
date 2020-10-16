import Vue from 'vue'
import index from './src/index.vue'

let Toast = Vue.extend(index)

let instance

const toast = function(options){
    options = options || {}
    instance = new Toast({
        data:options,
    })
    instance.$mount()
    document.body.appendChild(instance.$el)
}

export default toast
