import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../Redux/cartSlice";

function Category() {
  let { cid } = useParams();

  let [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${cid}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  return (
    <div className="container ">
      {/* {cid} */}
      <h2>Category {cid} </h2>
      <div className="row g-4">
        {data.map((a) => (
          <div key={a.id} className="  col-lg-3">
            <div className="shadow homeImage p-2">
              <img className="w-100" src={a.image} alt="product image" />
              <p>{a.title}</p>
              {/* <p>Detail : {a.description}</p> */}
              <p>Price : ${a.price}</p>
              <button
                className=" btn btn-primary btn-sm"
                onClick={() => dispatch(addItem(a))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
