import httpInstance from '@/utils/http.ts';
import { InsertCartRequest, CartItem, MergeCartRequest } from '@/api/model/cartModel.ts';

// 添加入购物车
export function insertCartAPI(data: InsertCartRequest): Result<CartItem> {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data
  });
}

// 获取最新购物车数据
export function findNewCartListAPI(): Result<CartItem[]> {
  return httpInstance({
    url: '/member/cart',
    method: 'GET'
  });
}

// 删除购物车商品
export function delCartAPI(ids: string[]): Result<boolean> {
  return httpInstance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  });
}

// 合并购物车
export function mergeCartAPI(data: MergeCartRequest[]): Result<null> {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data
  });
}
