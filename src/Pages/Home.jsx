import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";
import { Link } from "react-router-dom";
import Hero from "../Carousel/Hero";

function Home() {
  let [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container py-3">
      <div className="row g-4">
        {data.map((a) => (
          <div key={a.id} className="  col-lg-3">
            <div className="shadow homeImage p-2">
              <img className="w-100" src={a.thumbnail} alt="product image" />
              <p>{a.title}</p>
              <p>Brand : {a.brand}</p>
              <p>Price : ${a.price}</p>
              <button
                className=" btn btn-primary btn-sm"
                onClick={() => dispatch(addItem(a))}
              >
                Add To Cart
              </button>
              <Link
                className="btn btn-warning btn-sm ms-2 "
                to={`/details/${a.id}`}
              >
                More..
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
