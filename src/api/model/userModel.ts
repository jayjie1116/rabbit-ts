// 用户信息
export interface UserInfo {
  id: string;
  account: string;
  mobile: string;
  token: string;
  avatar: string;
  nickname: string;
  gender: string;
  birthday: string;
  cityCode: string;
  provinceCode: string;
  profession: string;
}

// 登录请求
export interface LoginRequest {
  account: string;
  password: string;
}
// 猜你喜欢
export interface LikeListRequest {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  orderNum: number;
}

// 我的订单请求
export interface UserOrderRequest {
  orderState: number;
  page: number;
  pageSize: number;
}

// 订单列表响应
export interface OrederListResult {
  counts: number;
  pageSize: number;
  pages: number;
  page: number;
  items: OrderInfo[];
}

// 订单信息
export interface OrderInfo {
  id: string;
  createTime: string;
  payType: number;
  orderState: number;
  payLatestTime: string;
  postFee: number;
  payMoney: number;
  totalMoney: number;
  totalNum: number;
  skus: [
    {
      id: string;
      spuId: string;
      name: string;
      quantity: number;
      image: string;
      realPay: number;
      curPrice: number;
      totalMoney: number;
      properties: [
        {
          propertyMainName: string;
          propertyValueName: string;
        }
      ];
      attrsText: string;
    }
  ];
  payChannel: number;
  countdown: number;
}
