import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState])

  const isFormValid = useMemo(() => {

    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation])


  const onInputChange = ({ target }) => {
    const { name, value } = target;
    if (target.type == "file") {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = event => {
        setFormState({
          ...formState,
          imagenBase64: event.target.result,
          [name]: URL.createObjectURL(file)
        });
      };
      reader.readAsDataURL(file);
    }
    console.log(formState)
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  const createValidators = () => {

    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    }

    setFormValidation(formCheckedValues);
  }



  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid
  }
}
