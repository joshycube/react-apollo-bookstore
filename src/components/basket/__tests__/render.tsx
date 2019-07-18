import React from "react";
import BasketRender, { getTotal } from "../render";

describe("Basket render", () => {
  let props: any;

  beforeEach(() => {
    props = {
      basket: {
        items: [
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
        ]
      }
    };
  });

  it("should render the sum and total right", () => {
    const wrapper = shallow(<BasketRender {...props} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("getTotal", () => {
  const items = [
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
  ];
  it("should return the correct total", () => {
    const total = items[0].price + items[1].price;
    expect(getTotal(items)).toEqual(total);
  });
});
