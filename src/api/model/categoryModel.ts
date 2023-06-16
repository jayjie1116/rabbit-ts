// 二级分类
export interface Category {
  id: string;
  name: string;
  children: CategoryChild[];
  picture: string;
}

// 分类集合
export interface Categories {
  id: string;
  layer: number;
  name: string;
  parent: string;
}

// 二级分类下属分类数组
export interface CategoryChild {
  id: string;
  name: string;
  picture: string;
  parentId: string;
  parentName: string;
  goods: Good[];
  categories: Categories[];
  brands: null;
  saleProperties: null;
}

// 导航数据
export interface NavigationDataRequest {
  categoryId: number;
  page: number;
  pageSize: number;
  sortField: string;
}

// 获取二级分类下导航商品数据
export interface NavigationGoodList {
  count: number;
  items: Good_Pt[];
  page: number;
  pageSize: number;
  pages: number;
}
