import InputGroup from "./InputGroup"

const ProductForm = () => {
  return (
    <div className='add-form'>
      <p><a className="button add-product-button">Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <InputGroup labelId={'product-name'} labelName={'Product Name'}/>
        <InputGroup labelId={'product-price'} labelName={'Price'}/>
        <InputGroup labelId={'product-quantity'} labelName={'Quantity'}/>
        <div className="actions form-actions">
          <a className="button">Add</a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default ProductForm