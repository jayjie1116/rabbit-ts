import httpInstance from '@/utils/http.ts';
import { CheckInfoResult, CreateOrderRequest } from '@/api/model/checkoutModel.ts';

export function getCheckInfoAPI(): Result<CheckInfoResult> {
  return httpInstance({
    url: '/member/order/pre',
    method: 'GET'
  });
}

export function createOrderAPI(data: CreateOrderRequest): Result<any> {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data
  });
}
