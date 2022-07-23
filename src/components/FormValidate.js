import { useState, useCallback } from 'react';
import isEmail from 'validator/es/lib/isEmail';

//custom hook for form mgmt && validation
export function useFormWithValidation(startValid = false, startValues = {}) {
  const [values, setValues] = useState(startValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(startValid);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name === 'email') {
      if(!isEmail(value)) {
        target.setCustomValidity('Wrong email address');
      } else {
        target.setCustomValidity('');
      }
    }

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = startValid) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid, startValid]
  );

  return { values, setValues, handleChange, errors, isValid, setIsValid, resetForm };
}
