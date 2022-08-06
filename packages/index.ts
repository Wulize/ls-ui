import lsButton from "./components/lsButton";
import lsLink from "./components/lsLink";
import { VueConstructor } from "vue";
const components = [
    lsButton,
    lsLink
];

const install = function (Vue: VueConstructor) {
    components.map(component => Vue.component(component.name, component))
}
// 当检测到Vue是全局变量的时候，自动将 执行 `install` 方法
// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue)
// }
//导出instal方法以及所有组件
export default {
    install,
    lsButton,
    lsLink
}