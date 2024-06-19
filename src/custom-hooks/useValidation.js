import { useState } from "react";

const useValidation = (values) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!values.name) {
      newErrors.name = "Name is required";
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!values.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(values.age) || values.age <= 0) {
      newErrors.age = "Age must be a number greater than 0";
    }
    if (values.attendingWithGuest === "Select") {
      newErrors.guestName = "Please select yes or no";
    }

    if (values.attendingWithGuest === "yes" && !values.guestName) {
      newErrors.guestName = "Guest name is required if attending with a guest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    errors,
    validate,
  };
};

export default useValidation;
