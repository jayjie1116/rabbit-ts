import { defineStore } from 'pinia';
import { ref } from 'vue';
import { LoginAPI } from '@/api/user.ts';
import { UserInfo } from '@/api/model/userModel.ts';
import { useCartStore } from '@/stores/cartStore.ts';
import { mergeCartAPI } from '@/api/cart.ts';

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({} as Partial<UserInfo>);
    const cartStore = useCartStore();
    const getUserInfo = async ({ account, password }: { account: string; password: string }) => {
      const res = await LoginAPI({ account, password });
      userInfo.value = res.result;
      //   合并购物车
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          };
        })
      );
      await cartStore.updateNewList();
    };

    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCart();
    };

    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    };
  },
  {
    persist: true
  }
);
