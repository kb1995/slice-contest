import React, { useState, useRef } from "react";
import FormInput from "./inputs/input";
import FormTextArea from "./inputs/textarea";

const Form = ({ formUrl, buttonCTA, inputs }) => {
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const submitForm = (event) => {
    event.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
        return false;
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={(event) => submitForm(event)}
        action={formUrl}
        method="POST"
        className="space-y-4 max-w-xl md:mx-auto"
      >
        {inputs.map((item, idx) => {
          switch (item.type) {
            case "input":
              return (
                <FormInput
                  key={`contact-form-input-${idx}`}
                  name={item.name}
                  label={item.label}
                  placeholder={item.placeholder}
                />
              );
            case "textarea":
              return (
                <FormTextArea
                  key={`contact-form-input-${idx}`}
                  name={item.name}
                  label={item.label}
                  placeholder={item.placeholder}
                />
              );
            default:
              break;
          }
        })}
        <span className="mt-3 w-full inline-flex rounded-md shadow-sm">
          <input
            type="submit"
            value={buttonCTA}
            className="cursor-pointer w-full inline-flex justify-center items-center text-white font-medium px-5 py-3 rounded-full transition duration-200  bg-pink-600 hover:bg-pink-500"
          />
        </span>
        {status == "SUCCESS" && (
          <div className="flex space-x-2 items-center">
            <svg
              className="h-6 w-6 text-pink-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xl font-medium">
              Thanks. We will be in touch soon!
            </p>
          </div>
        )}
        {status == "ERROR" && (
          <div className="text-red-600 font-medium text-sm">
            There was an error submitting the form. Please ensure that you have
            a stable internet connection and try again.
          </div>
        )}
      </form>
    </>
  );
};

export default Form;
