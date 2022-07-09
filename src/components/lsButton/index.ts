import VueConstructor from 'vue';
import lsButton from './src/lsButton.vue';

(lsButton as any).install = function (Vue: VueConstructor) {
    (Vue as any).component(lsButton.name, lsButton)
}

export default lsButton;