import httpInstance from '@/utils/http.ts';
import { LikeListRequest, LoginRequest, OrederListResult, UserInfo, UserOrderRequest } from '@/api/model/userModel.ts';

// 登录
export function LoginAPI(params: LoginRequest): Result<UserInfo> {
  return httpInstance({
    url: '/login',
    method: 'POST',
    data: params
  });
}

// 获取猜你喜欢商品列表
export function getLikeListAPI({ limit = 4 }): Result<LikeListRequest[]> {
  return httpInstance({
    url: '/goods/relevant',
    params: {
      limit
    }
  });
}

//  获取订单列表
export function getUserOrder(params: UserOrderRequest): Result<OrederListResult> {
  return httpInstance({
    url: '/member/order',
    method: 'GET',
    params
  });
}
