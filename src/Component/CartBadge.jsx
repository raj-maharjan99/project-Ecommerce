import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartBadge() {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <div className="col-lg-3 d-flex gap-5">
        <Link to={"/cart"}>
          <button type="button" className="btn btn-primary position-relative">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
              {cartItems.quantity}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
        <Link to={"/cart"}>
          <button type="button" className="btn btn-warning position-relative">
            Wishlist
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
              2<span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default CartBadge;
