import { useEffect, useState } from "react";
import Bpp from "./Bpp";
import "./App.css";

function App() {
  let [productlist, updateProductList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    let productlist = await res.json();
    updateProductList(productlist);
    console.log(res);
  }
  if (productlist.length == 0) {
    return <h1>Fetching productlist ........</h1>;
  }

  return (
    <>
      <div className="product-list">
        {productlist.map((props) => (
          <Bpp {...props} key={props.id}></Bpp>
        ))}
      </div>
    </>
  );
}

export default App;
