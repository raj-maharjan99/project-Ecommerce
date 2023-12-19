import { useDispatch, useSelector } from "react-redux";
import {
  addItemQuantity,
  removeItem,
  subtractItemQuantity,
} from "../Redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <div>
      <table id="cart" className="table table-hover table-condensed">
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Product</th>
            <th style={{ width: "10%" }}>Price</th>
            <th style={{ width: "8%" }}>Quantity</th>
            <th style={{ width: "22%" }} className="text-center">
              Subtotal
            </th>
            <th style={{ width: "10%" }} />
          </tr>
        </thead>
        <tbody>
          {cartItems.items.map((a) => (
            <tr>
              <td data-th="Product">
                <div className="row">
                  <div className="col-sm-2 hidden-xs">
                    <img
                      src={a.thumbnail}
                      alt="..."
                      className="img-responsive w-100"
                    />
                  </div>
                  <div className="col-sm-10">
                    <h4 className="nomargin">{a.title}</h4>
                    <p>{a.description}</p>
                  </div>
                </div>
              </td>
              <td data-th="Price">${a.price}</td>
              <td className="" data-th="Quantity">
                <button onClick={() => dispatch(subtractItemQuantity(a))}>
                  -
                </button>

                {a.quantity}
                <button onClick={() => dispatch(addItemQuantity(a))}>+</button>
              </td>

              <td data-th="Subtotal" className="text-center">
                ${a.price * a.quantity}
              </td>
              <td className="actions" data-th>
                <button className="btn btn-info btn-sm">
                  <i className="fa fa-refresh" />
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removeItem(a))}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <a href="#" className="btn btn-warning">
                <i className="fa fa-angle-left" /> Continue Shopping
              </a>
            </td>
            <td colSpan={2} className="hidden-xs" />
            <td className="hidden-xs text-center">
              <strong>Total ${cartItems.totalAmount}</strong>
            </td>
            <td>
              <a href="#" className="btn btn-success btn-block">
                Checkout <i className="fa fa-angle-right" />
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
