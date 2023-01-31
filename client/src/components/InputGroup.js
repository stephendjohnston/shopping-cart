const InputGroup = ({labelId, labelName}) => {
  return (
    <div className='input-group'>
      <label htmlFor={labelId}>{labelName}</label>
      <input type='text' id={labelId} value=''/>
    </div>
  )
}

export default InputGroup