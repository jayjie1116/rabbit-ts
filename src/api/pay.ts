import httpInstance from '@/utils/http.ts';
import { OrderResult } from '@/api/model/payModel.ts';

export function getOrderAPI(id: string): Result<OrderResult> {
  return httpInstance(`/member/order/${id}`);
}
