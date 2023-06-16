import httpInstance from '@/utils/http.ts';
import { BannerResult, BannerRequest, HotListResult, ProductResult } from '@/api/model/homeModel.ts';

//获取轮播图
export function getBannerAPI(params: BannerRequest): Result<BannerResult[]> {
  const { distributionSite = '1' } = params;
  return httpInstance({ url: '/home/banner', params: { distributionSite } });
}
//获取新鲜好物
export function getNewApi(): Result<Good[]> {
  return httpInstance({ url: '/home/new' });
}
//获取人气推荐
export function getHotApi(): Result<HotListResult[]> {
  return httpInstance({ url: '/home/hot' });
}
//获取所有商品模块
export function getGoodsAPI(): Result<ProductResult[]> {
  return httpInstance({ url: '/home/goods' });
}
