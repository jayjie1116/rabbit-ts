import httpInstance from '@/utils/http.ts';
import { GoodDetail, HotGoodsRequest } from '@/api/model/detailModel.ts';

export function getDetail(id: string): Result<GoodDetail> {
  return httpInstance('/goods', { params: { id } });
}

export function getHotGoodsAPI({ id, type, limit = 3 }: HotGoodsRequest): Result<Good[]> {
  return httpInstance('/goods/hot', { params: { id, type, limit } });
}
