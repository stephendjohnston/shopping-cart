import {useState, useEffect} from 'react';
import Product from './Product';
import data from '../../mockData/data'

const ProductListing = () => {
  const [products, setProducts] = useState([])
  console.log(products);
  useEffect(() => {
    setProducts(data);
  }, [data])


  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product key={product.id} {...product}/>
      })}
    </div>
  )
}

export default ProductListing