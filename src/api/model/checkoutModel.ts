// 生成订单信息
export interface CheckInfoResult {
  userAddresses: Address[];
  goods: [
    {
      id: string;
      name: string;
      picture: string;
      count: number;
      skuId: string;
      attrsText: string;
      price: string;
      payPrice: string;
      totalPrice: string;
      totalPayPrice: string;
    }
  ];
  summary: {
    goodsCount: number;
    totalPrice: number;
    totalPayPrice: number;
    postFee: number;
    discountPrice: number;
  };
}

// 提交订单信息请求
export interface CreateOrderRequest {
  addressId: string;
  buyerMessage: string;
  deliveryTimeType: number;
  goods: { skuId: string; count: number }[];
  payChannel: number;
  payType: number;
}

// 提交订单信息响应
export interface CreateOrderResult {
  id: string;
  createTime: string;
  payType: number;
  orderState: number;
  payLatestTime: string;
  postFee: number;
  payMoney: number;
  totalMoney: number;
  totalNum: number;
  skus: [];
  payChannel: number;
  countdown: number;
}

// 地址
export interface Address {
  id: string;
  receiver: string;
  contact: string;
  provinceCode: string;
  cityCode: string;
  countyCode: string;
  address: string;
  isDefault: number;
  fullLocation: string;
  postalCode: number;
  addressTags: string;
}
