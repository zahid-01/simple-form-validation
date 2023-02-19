import { useState } from "react";

const SimpleInput = (props) => {
  const [inpState, setInpState] = useState("");
  const [wasTouched, setWasTouched] = useState(false);

  const isNameValid = inpState.trim().length !== 0;

  const inputHandler = (e) => {
    setWasTouched(true);
    setInpState(e.target.value);
  };

  const fromSubmitHandler = (e) => {
    e.preventDefault();
    setWasTouched(true);
    if (!isNameValid) {
      return;
    }
    setInpState("");
    setWasTouched(false);
  };

  const onBlurHandler = () => {
    setWasTouched(true);
    if (!isNameValid) {
      return;
    }
  };

  const formClass = `form-control ${
    wasTouched && !isNameValid ? "invalid" : ""
  }`;
  return (
    <form onSubmit={fromSubmitHandler}>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={inpState}
          onChange={inputHandler}
          onBlur={onBlurHandler}
        />
        {wasTouched && !isNameValid && (
          <p className="error-text">{`Name cannot be empty`}</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
