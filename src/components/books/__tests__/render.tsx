import React from "react";

import BooksRender from "../render";
import Checkbox from "@/components/ui/checkbox";
import { BookItem } from "../style";

describe("Books render", () => {
  let props: any;

  beforeEach(() => {
    props = {
      data: {
        books: [
          {
            bookId: 1,
            title: "foo",
            author: "me",
            price: 12.5
          },
          {
            bookId: 2,
            title: "bar",
            author: "me",
            price: 1.99
          }
        ],
        basket: {
          items: [
            {
              bookId: 2,
              title: "bar",
              author: "me",
              price: 1.99
            }
          ]
        }
      },
      remove: jest.fn(),
      add: jest.fn()
    };
  });

  describe("Add item", () => {
    it("should trigger the add()", () => {
      const addSpy = jest.fn();
      const wrapper = shallow(<BooksRender {...props} add={addSpy} />);
      wrapper
        .find(BookItem)
        .at(0)
        .find(Checkbox)
        .prop("onChange")();
      expect(addSpy).toBeCalledTimes(1);
      expect(addSpy).toBeCalledWith({
        variables: { item: props.data.books[0] }
      });
    });
  });

  describe("remove item", () => {
    it("should trigger the add()", () => {
      const removeSpy = jest.fn();
      const wrapper = shallow(<BooksRender {...props} remove={removeSpy} />);
      wrapper
        .find(BookItem)
        .at(1)
        .find(Checkbox)
        .prop("onChange")();
      expect(removeSpy).toBeCalledTimes(1);
      expect(removeSpy).toBeCalledWith({
        variables: { id: 2 }
      });
    });
  });
});
