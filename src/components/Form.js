import React from "react";
import { FormField } from "./FormField";
import useForm from "../custom-hooks/useForm";
import useValidation from "../custom-hooks/useValidation";

export const Form = () => {
  const { values, handleChange, handleSubmit, resetForm } = useForm(submitForm);

  const { errors, validate } = useValidation(values);

  function submitForm() {
    if (validate()) {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    }
  }

  return (
    <div>
      <h1>Event Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormField
          label="Age"
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
          error={errors.age}
        />
        <div>
          <label>Are you attending with a guest?</label>
          <select
            name="attendingWithGuest"
            value={values.attendingWithGuest}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.attendingWithGuest && (
            <p className="error">{errors.attendingWithGuest}</p>
          )}
        </div>
        {values.attendingWithGuest === "yes" && (
          <FormField
            label="Guest Name"
            type="text"
            name="guestName"
            value={values.guestName}
            onChange={handleChange}
            error={errors.guestName}
          />
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
