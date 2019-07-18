import React from "react";
import { Link } from "react-router-dom";

import { IBasket } from "@/apollo/basket/type";
import { IBook } from "./type";
import Checkbox from "@/components/ui/checkbox";
import {
  BooksWrapper,
  BookItem,
  BookTitle,
  BookPrice,
  AddLabel,
  ActionBar
} from "./style";

interface IProps {
  data: {
    books: IBook[];
    basket: IBasket;
  };
  add: (arg: { variables: { item: IBook } }) => void;
  remove: (arg: { variables: { id: number } }) => void;
}

const isInBasket = (items: IBook[], id: number): boolean =>
  !!items.filter((item: IBook) => item.bookId === id).length;

export const BooksRender = ({
  data: { books, basket },
  remove,
  add
}: IProps) => (
  <BooksWrapper>
    {books.map((book: IBook) => (
      <BookItem key={book.title}>
        <BookTitle>
          {book.title} - {book.author}
          <BookPrice>£{book.price}</BookPrice>
        </BookTitle>
        <ActionBar>
          <Link to={`/page/edit/book/${book.bookId}`}>Edit</Link>
          <Checkbox
            onChange={() =>
              isInBasket(basket.items, book.bookId)
                ? remove({ variables: { id: book.bookId } })
                : add({ variables: { item: book } })
            }
            checked={isInBasket(basket.items, book.bookId)}
          />
          <AddLabel>
            {isInBasket(basket.items, book.bookId) ? "remove" : "add"}
          </AddLabel>
        </ActionBar>
      </BookItem>
    ))}
  </BooksWrapper>
);

export default BooksRender;
