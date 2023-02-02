const InputGroup = ({ value, onChange, labelId, labelName }) => {
  return (
    <div className="input-group">
      <label htmlFor={labelId}>{labelName}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        id={labelId}
      />
    </div>
  );
};

export default InputGroup;
