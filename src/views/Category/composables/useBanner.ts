import { onMounted, ref } from 'vue';
import { getBannerAPI } from '@/api/home.ts';
import { BannerResult } from '@/api/model/homeModel.ts';
export function useBanner() {
  const bannerList = ref([] as BannerResult[]);
  const getBanner = async () => {
    const res = await getBannerAPI({ distributionSite: '2' });
    bannerList.value = res.result;
  };
  onMounted(() => getBanner());

  return { bannerList };
}
