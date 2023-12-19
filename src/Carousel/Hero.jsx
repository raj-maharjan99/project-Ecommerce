import axios from "axios";
import { useEffect, useState } from "react";
import HeroHome from "./HeroHome";

function Hero() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/carousel")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("raj", data);

  return (
    <div className="container">
      <div className="py-4">
        {" "}
        <div className="carousel-inner" data-bs-ride="carousel">
          {data.map((item) => (
            <div className="carousel-item active">
              <img src={item.thumbnail} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
      </div>
      <HeroHome />
    </div>
  );
}

export default Hero;
