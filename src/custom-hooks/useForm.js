import { useState } from "react";

const useForm = (submitForm) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "",
    guestName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      age: "",
      attendingWithGuest: "",
      guestName: "",
    });
  };

  return {
    values,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
