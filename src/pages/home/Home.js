import React from "react";
import Card from "../../components/card/Card";
import img from "../../assest/shirt.jpg";
import img1 from "../../assest/women.jpg";
import img2 from "../../assest/shoes.jfif";
import img3 from "../../assest/shoes2.jfif";

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-2"></div>
        <div className="col-4 text-center">
          <h2>Men's Clothes</h2>
          <div className="slider">
            <Card title="Men's Shirt" price="$150.00" img={img} />
            <Card title="Men's Shirt" price="$150.00" img={img} />
            <Card title="Men's Shirt" price="$150.00" img={img} />
          </div>
        </div>
        <div className="col-4 text-center">
          <h2>Women's Clothes</h2>
          <div className="slider">
            <Card title="Women's Shirt" price="$50.00" img={img1} />
            <Card title="Women's Shirt" price="$50.00" img={img1} />
            <Card title="Women's Shirt" price="$50.00" img={img1} />
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row mt-5">
        <div className="col-2"></div>
        <div className="col-8 text-center">
          <h2>Shoes For Men's</h2>
          <div className="slider">
          <Card title="Men Black Shoes" price="$3.00" img={img2} />
          <Card title="Men Black Shoes" price="$3.00" img={img2} />
          <Card title="Men Black Shoes" price="$3.00" img={img2} />
          <Card title="Men Black Shoes" price="$3.00" img={img2} />

          </div>
        </div>

        <div className="col-2"></div>
      </div>
      <div className="row mt-5">
        <div className="col-2"></div>
        <div className="col-8 text-center">
          <h2>Shoes For Women's</h2>
          <div className="slider">
          <Card title="Men Black Shoes" price="$3.00" img={img3} />
          <Card title="Men Black Shoes" price="$3.00" img={img3} />
          <Card title="Men Black Shoes" price="$3.00" img={img3} />
          <Card title="Men Black Shoes" price="$3.00" img={img3} />

          </div>
        </div>

        <div className="col-2"></div>
      </div>
    </div>
  );
}
