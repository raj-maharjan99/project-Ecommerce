import React from "react";
import { Link } from "react-router-dom";

function HeroHome() {
  return (
    <>
      <section className="banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <h1 className="pb-3">Iphone</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                corporis?
              </p>{" "}
              <div className="d-flex gap-2">
                <Link className="btn btn-warning shadow">Order Now</Link>
                <Link className="btn btn-outline-dark shadow">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-6 ">
              <img
                className="w-100 rounded-5"
                src="https://fdn.gsmarena.com/imgroot/news/23/09/apple-iphone-15-pro-what-to-expect/-822/gsmarena_001.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHome;
