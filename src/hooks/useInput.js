import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INP") {
    return { enteredValue: action.val };
  }
  if (action.type === "BLUR") {
    return { enteredValue: state.enteredValue, wasTouched: true };
  }
  if (action.type === "RESET") {
    return { enteredValue: "", wasTouched: false };
  }
};

const useInput = (validateInp) => {
  const [enteredInp, dispatchEntered] = useReducer(reducer, {
    enteredValue: "",
    wasTouched: false,
  });

  const isValueValid = validateInp(enteredInp.enteredValue);

  const setValueHandler = (e) => {
    dispatchEntered({
      type: "INP",
      val: e.target.value,
      validate: validateInp,
    });
  };

  const blurHandler = () => {
    dispatchEntered({ type: "BLUR" });
  };

  const reset = () => {
    dispatchEntered({ type: "RESET" });
  };

  return {
    enteredValue: enteredInp.enteredValue,
    wasTouched: enteredInp.wasTouched,
    isValueValid,
    setValueHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
