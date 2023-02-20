import useInput from "../hooks/useInput";

const validateEmail = (enteredValue) =>
  enteredValue.includes("@") && enteredValue.trim().length !== 0;
const validateName = (enteredValue) => enteredValue.trim().length !== 0;

const SimpleInput = (props) => {
  const nameInp = useInput(validateName);
  const emailInp = useInput(validateEmail);

  let validForm;

  if (nameInp.isValueValid && emailInp.isValueValid) {
    validForm = true;
  }

  const fromSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameInp.isValueValid && !emailInp.isValueValid) {
      return;
    }
    nameInp.reset();
    emailInp.reset();
  };

  const formClass = `form-control ${
    nameInp.wasTouched && !nameInp.isValueValid ? "invalid" : ""
  }`;

  const emailClass = `form-control ${
    emailInp.wasTouched && !emailInp.isValueValid ? "invalid" : ""
  }`;
  return (
    <form onSubmit={fromSubmitHandler}>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInp.enteredValue}
          onChange={nameInp.setValueHandler}
          onBlur={nameInp.blurHandler}
        />
        {nameInp.wasTouched && !nameInp.isValueValid && (
          <p className="error-text">{`Name cannot be empty`}</p>
        )}
      </div>

      {/*Email */}

      <div className={emailClass}>
        <label htmlFor="name">Email</label>
        <input
          type="text"
          id="email"
          value={emailInp.enteredValue}
          onChange={emailInp.setValueHandler}
          onBlur={emailInp.blurHandler}
        />
        {emailInp.wasTouched && !emailInp.isValueValid && (
          <p className="error-text">{`Enter valid emial`}</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!validForm}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
