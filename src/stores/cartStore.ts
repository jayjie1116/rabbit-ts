// 封装购物车模块
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useUserStore } from '@/stores/userStore.ts';
import { delCartAPI, findNewCartListAPI, insertCartAPI } from '@/api/cart.ts';
import { CartItem } from '@/api/model/cartModel.ts';

export const useCartStore = defineStore(
  'cart',
  () => {
    // 用户信息
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);
    //  购物车列表
    const cartList = ref([] as CartItem[]);
    // 获取最新购物车列表
    const updateNewList = async () => {
      const res = await findNewCartListAPI();
      cartList.value = res.result;
    };
    //  添加入购物车事件
    const addCart = async (good: CartItem) => {
      if (isLogin.value) {
        const { skuId, count } = good;
        await insertCartAPI({ skuId, count });
        await updateNewList();
      } else {
        const item = cartList.value.find((item: CartItem): boolean => good.skuId === item.skuId);
        if (item) {
          // 找到了
          item.count += good.count;
        } else {
          // 没找到
          cartList.value.push(good);
        }
      }
      // 添加购物车操作
      // 已添加过 - count + 1
      // 没有添加过 - 直接push
      // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    };
    // 删除购物车中某件商品的事件
    const delCart = async (skuId: string) => {
      if (isLogin.value) {
        await delCartAPI([skuId]);
        await updateNewList();
      } else {
        cartList.value = cartList.value.filter((item) => item.skuId !== skuId);
      }
    };
    // 清除购物车
    const clearCart = () => {
      cartList.value = [];
    };
    // 商品单选框事件
    const singCheckChange = (sukId: string, selected: boolean) => {
      cartList.value.forEach((item) => {
        if (item.skuId === sukId) {
          item.selected = selected;
        }
      });
    };
    // 全选框事件
    const allCheckChange = (selected: boolean) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };
    const isAll = computed(() => cartList.value.every((item) => item.selected));
    // 购物中商品的总数量
    const allCount = computed(() => {
      return cartList.value.reduce((count, item) => count + item.count, 0);
    });
    // 购物中商品的总价格
    const allPrice = computed(() => {
      return cartList.value.reduce((sum, item) => sum + item.count * parseInt(item.price), 0);
    });
    // 选中商品数量
    const SelectedCount = computed(() => {
      return cartList.value.filter((item) => item.selected).reduce((count, item) => count + item.count, 0);
    });

    const SelectedCPrice = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((count, item) => count + item.count * parseInt(item.price), 0);
    });
    return {
      cartList,
      addCart,
      delCart,
      singCheckChange,
      allCheckChange,
      clearCart,
      updateNewList,
      SelectedCount,
      SelectedCPrice,
      isAll,
      allCount,
      allPrice
    };
  },
  {
    persist: true
  }
);
