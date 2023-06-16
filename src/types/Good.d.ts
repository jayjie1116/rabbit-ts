interface Good {
  id: string;
  name: string;
  desc: string;
  price: number;
  picture: string;
  discount: string;
  orderNum: number;
}

type Good_Pt = Partial<Good>;
