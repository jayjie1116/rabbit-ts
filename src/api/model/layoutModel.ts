// 分类数据
export interface ClassData {
  id: string;
  name: string;
  picture: string;
  children: ClassData[];
  goods: Good[];
}
