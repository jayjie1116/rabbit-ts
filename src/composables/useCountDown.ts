// 倒计时函数

import { computed, onUnmounted, ref } from 'vue';
import * as dayjs from 'dayjs';

export const useCountDown = () => {
  let timer: NodeJS.Timer | null;
  const time = ref(0);
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'));
  const start = (currentTime: number) => {
    time.value = currentTime;
    timer = setInterval(() => {
      time.value--;
    }, 1000);
  };
  onUnmounted(() => {
    timer && clearInterval(timer);
  });
  return {
    formatTime,
    start
  };
};
