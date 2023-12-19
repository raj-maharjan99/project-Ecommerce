import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Pages/Category";
import Details from "../Pages/Details";
import Hero from "../Carousel/Hero";
import Contact from "../Pages/Contact";

function Navbar() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      // .get("http://localhost:3000/categories")
      .get(`https://fakestoreapi.com/products/categories`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-dark" data-bs-theme="dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse  navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto py-3  gap-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link   fst-italic rounded-pill  bg-primary fw-bolder  active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu">
                  {data.map((item, index) => (
                    <li key={index}>
                      <Link className="dropdown-item " to={`/category/${item}`}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Feedback</Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fst-italic rounded-pill  bg-danger  fw-bolder  active"
                  aria-current="page"
                  to="/all"
                >
                  All-Products
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/all" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:cid/" element={<Category />} />
        <Route path="/details/:id/" element={<Details />} />
      </Routes>
    </>
  );
}

export default Navbar;
