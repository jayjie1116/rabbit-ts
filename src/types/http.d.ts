interface ResultItem<T> {
  code: string;
  msg: string;
  result: T;
}

type Result<T> = Promise<ResultItem<T>>;
