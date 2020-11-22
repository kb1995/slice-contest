const FormTextArea = ({ name, label, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 sm:col-span-2">
        <div className="flex rounded-md shadow-sm">
          <textarea
            id={name}
            name={name}
            rows="3"
            placeholder={placeholder}
            className="h-48 form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default FormTextArea;
