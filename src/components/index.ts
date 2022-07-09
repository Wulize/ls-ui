import lsButton from "./lsButton";
import { VueConstructor } from "vue";
const components = [
    lsButton
];

const install = function (Vue: VueConstructor) {
    components.map(component => Vue.component(component.name, component))
}
//导出instal方法以及所有组件
export default {
    install,
    lsButton
}