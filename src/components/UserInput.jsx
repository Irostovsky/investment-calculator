const UserInput = ({ label, name, value, onChangeHandler }) => {
  const handleInputChange = (event) => {
    const value = parseFloat(event.target.value);
    onChangeHandler(name, value);
  };
  return (
    <div>
      <label>{label}</label>
      <input type="number" min="0" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default UserInput;
