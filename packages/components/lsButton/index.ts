import lsButton from './src/lsButton.vue';
// eslint-disable-next-line
(lsButton as any).install = function (Vue: any) {
    (Vue as any).component(lsButton.name, lsButton)
}

export default lsButton;