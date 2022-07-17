import VueConstructor from 'vue';
import lsLink from './src/lsLink.vue';

(lsLink as any).install = function (Vue: VueConstructor) {
    (Vue as any).component(lsLink.name, lsLink)
}

export default lsLink;