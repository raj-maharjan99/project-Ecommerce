import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

function Details() {
  let { id } = useParams();
  let [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("detail", data);
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={data.thumbnail} />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src="" />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src="" />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src={data.thumbnail} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src={data.thumbnail} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src={data.thumbnail} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src={data.thumbnail} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" data-toggle="tab">
                      <img src={data.thumbnail} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{data.title}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <span className="review-no">Rating: {data.rating}</span>
                </div>
                <p className="product-description">{data.description}</p>
                <h4 className="price">
                  current price: <span>${data.price}</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product.
                  <strong>(87 votes)</strong>
                </p>
                <h5 className="sizes">
                  sizes:
                  <span className="size" data-toggle="tooltip" title="small">
                    s
                  </span>
                  <span className="size" data-toggle="tooltip" title="medium">
                    m
                  </span>
                  <span className="size" data-toggle="tooltip" title="large">
                    l
                  </span>
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="xtra large"
                  >
                    xl
                  </span>
                </h5>
                <h5 className="colors">
                  colors:
                  <span
                    className="color orange not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  />
                  <span className="color green" />
                  <span className="color blue" />
                </h5>
                <div className="action">
                  <button
                    onClick={() => dispatch(addItem(data))}
                    className="add-to-cart btn btn-sm"
                    type="button"
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
