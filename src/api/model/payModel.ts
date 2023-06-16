export interface OrderResult {
  id: string;
  createTime: string;
  payType: number;
  orderState: number;
  payLatestTime: string;
  countdown: number;
  postFee: number;
  payMoney: number;
  payChannel: number;
  payState: number;
  totalMoney: number;
  totalNum: number;
  deliveryTimeType: number;
  receiverContact: string;
  receiverMobile: string;
  provinceCode: string;
  cityCode: string;
  countyCode: string;
  receiverAddress: string;
  payTime: null;
  consignTime: null;
  endTime: null;
  closeTime: string;
  evaluationTime: null;
  skus: [
    {
      id: string;
      spuId: string;
      name: string;
      quantity: number;
      image: string;
      realPay: number;
      curPrice: number;
      totalMoney: null;
      properties: [];
      attrsText: string;
    }
  ];
  arrivalEstimatedTime: null;
}
