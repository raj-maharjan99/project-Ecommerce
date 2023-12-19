import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";

function Header() {
  // const cartItems = useSelector((state) => state.cart);
  // console.log("raj", cartItems.quantity);
  // console.log(cartItems);
  return (
    <header className="container py-3 ">
      <div className="row">
        <div className="col-lg-9">
          <h1 className="logo-css text-center">Welcome</h1>
        </div>

        <CartBadge />
      </div>
    </header>
  );
}

export default Header;
