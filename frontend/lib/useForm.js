import { valueFromAST } from 'graphql';
import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    // destructure the name, value and type
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      value[0] = e.target.files;
    }
    setInputs({
      // copy in the existing state
      ...inputs,
      // dynamically set the input name to the value chosen by user
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial)
  }

  function clearForm() {
    const blankState = Object.entries(inputs).map((key, value) => key, '')
  }

  // return the things we want to surface from the custom hook
  return {
    inputs,
    handleChange,
  };
}
