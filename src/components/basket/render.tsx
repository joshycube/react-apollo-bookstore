import React, { memo } from "react";

import { IBook } from "@/components/books/type";
import { BasketWrapper } from "./style";

export interface IBasket {
  basket: {
    items: IBook[];
  };
}

interface IProps extends IBasket {}

export const getTotal = (items: IBook[]): number =>
  items
    .map((item: IBook) => item.price)
    .reduce((acc: number, current: number) => acc + current, 0);

const BasketRender = ({ basket: { items } }: IProps) => {
  return (
    <BasketWrapper>
      You have selected: {items.length} books with the total price of: £
      {getTotal(items).toFixed(2)}
    </BasketWrapper>
  );
};

export default memo(BasketRender);
