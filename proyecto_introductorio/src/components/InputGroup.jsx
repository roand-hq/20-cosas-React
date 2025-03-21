const InputGroup = () => {
  return (
    <div class="input-group">
      <span class="input-group-text">First and last name</span>
      <input type="text" aria-label="First name" class="form-control" />
      <input type="text" aria-label="Last name" class="form-control" />
    </div>
  );
};
export default InputGroup;