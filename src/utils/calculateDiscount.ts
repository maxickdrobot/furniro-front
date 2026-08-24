export const calculateDiscount = (price: number, oldPrice: number | null): number | null => {
  if (oldPrice == null || oldPrice <= price) {
    return null;
  }

  return Math.round(((oldPrice - price) / oldPrice) * 100);
};
