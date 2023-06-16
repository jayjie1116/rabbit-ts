// Banner响应
import { ClassData } from '@/api/model/layoutModel.ts';

export interface BannerResult {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}
// Banner请求
export interface BannerRequest {
  distributionSite: string;
}
//人气推荐响应
export interface HotListResult {
  id: string;
  picture: string;
  title: string;
  alt: string;
}
// 商品模块响应
export interface ProductResult extends ClassData {
  saleInfo: string;
}
