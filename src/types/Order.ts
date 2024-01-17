export type Order = {
  id: number,
  userId: number,
  productIds?: number[],
};

export type OrderId = {
  id:number[],
};