// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core';
import { App } from 'vue';

export const lazyPlugin = {
  install(app: App<Element>) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            //   图片进入视口区域
            el.src = binding.value;
            stop();
          }
        });
      }
    });
  }
};
