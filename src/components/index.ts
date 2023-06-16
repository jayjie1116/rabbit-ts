// 全局组件注册插件
import ImageView from './ImageView/index.vue';
import Sku from './XtxSku/index.vue';
import { App } from 'vue';

export const componentsPlugin = {
  install(app: App<Element>) {
    app.component('XtxSku', Sku);
    app.component('XtxImageView', ImageView);
  }
};
