import React, { Component } from "react";
import "./Product.css";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
      products: [
        {
          id: 101,
          name: "product 1",
          quantity: 0,
          cost: 500,
        },
        {
          id: 102,
          name: "product 2",
          quantity: 0,
          cost: 650,
        },
        {
          id: 103,
          name: "product 3",
          quantity: 0,
          cost: 900,
        },
      ],
    };
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  render() {
    return (
      <div>
        {this.state.products.length != 0 ? (
          <div className="car">
            <p>Cart : {this.state.cart}</p>
            {this.state.products.map((item) => {
              return (
                <div className="cart">
                  <h3>
                    {item.name} : {item.quantity}
                    <br /> <p>Price : {item.cost}</p>
                    <span>Sub Total : {item.quantity * item.cost}</span>
                  </h3>
                  <button
                    onClick={() => {
                      this.increaseQuantity(item.id);
                    }}
                  >
                    ADD
                  </button>
                  <button
                    onClick={() => {
                      this.DincreaseQuantity(item.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>Product list is empty</h1>
        )}
      </div>
    );
  }

  increaseQuantity(id) {
    let newList = [...this.state.products];
    let newCart = this.state.cart;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id == id) {
        newList[i].quantity += 1;
        newCart += 1;
      }
    }
    this.setState({ cart: newCart, products: newList });
  }

  DincreaseQuantity(id) {
    let newList = [...this.state.products];
    let newCart = this.state.cart;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id == id) {
        newList[i].quantity -= 1;
        newCart -= 1;
      }
    }
    this.setState({ cart: newCart, products: newList });
  }
}

export default Products;
