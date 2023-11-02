//ShowProduct
import { useEffect, useState } from "react";

export default function Product() {
  //products.json=>fetch 사용
  const [products, setProducts] = useState([]);
  const [checked,setchecked]= useState(false)
  //fetch가 무한루프됨
  /* fetch("data/products.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setProducts(data);
    }); */
  //useEffect() 최초에 한번만 fetch 실행
  function handleChange(){
    setchecked(s=>!s)
  }
  useEffect(() => {
    fetch(`./data/${checked?'sale_':''}products.json`) //public 기준
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [checked]);

  return (
    <div>
      <h1>show Product!</h1>
      <input type="checkbox" id="checkBox" onChange={handleChange}/>
      <label htmlFor="checkBox">Show only sale!</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>name: {product.name}</h3>
            <h3>price : {product.price}</h3>
            <h3>id: {product.id}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
