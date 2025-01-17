import { useState } from "react";

export const useForm = (incialForm = {}) => {
  const [formState, setFormState] = useState(incialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
