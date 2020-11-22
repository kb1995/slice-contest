const FormInput = ({ name, label, placeholder }) => {
  const inputType = () => {
    switch (name) {
      case "email":
        return "email";
      default:
        return "text";
    }
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id={name}
          className="form-input block w-full sm:text-sm sm:leading-5"
          placeholder={placeholder}
          name={name}
          type={inputType()}
          required
        />
      </div>
    </div>
  );
};

export default FormInput;
