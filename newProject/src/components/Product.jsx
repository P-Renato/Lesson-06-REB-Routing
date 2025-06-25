import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Product.scss';

function Product() {
  const [item, setItem] = useState(null);
  const { pid } = useParams();
  console.log("product component");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${pid}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [pid]);
  return (
    <>
      <div className="p-20 pb-10"></div>
      <div className="bg-white text-gray-600 flex flex-col md:flex-row border border-gray-200 w-5/6 m-auto p-">
        <img
          src={item?.image}
          alt={item?.title}
          className="w-full md:w-1/2 basis-3xl p-12"
        />
        <div className="flex flex-col p-14 border-left">
          <h1 className="text-3xl">{item?.title}</h1>
          <p className="mt-4 text-sm">{item?.price.toFixed(2)}€</p>
          <p className="mt-4">{item?.description}</p>
          <p>Rating: {item?.rating.rate}</p>
        </div>
      </div>
      <button 
      className="border-none bg-blue-200 px-10 py-2 rounded-sm mt-2 block mx-auto text-gray-600"
      onClick={()=>history.back()}> Back</button>
    </>
  );
}

export default Product;