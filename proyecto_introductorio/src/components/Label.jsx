const Label = () => {
  return (
    <form class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInputValue"
        placeholder="name@example.com"
      />
      <label for="floatingInputValue">Input with value</label>
    </form>
  );
};

export default Label;