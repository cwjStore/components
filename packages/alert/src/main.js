import Vue from 'vue';
let MyMsgConstructor = Vue.extend(require('./alert.vue'));

let instance;

var MyMsg = function (msg) {
    instance = new MyMsgConstructor({
        data: {
            message: msg
        }
    })

    //如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
    instance.$mount();

    document.body.appendChild(instance.$el)
    return instance;
}


export default MyMsg;