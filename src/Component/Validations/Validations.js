export const validateEmail = (
  text,
  errorMessage = "This is a required field"
) => {
  if (text.trim().length === 0) {
    return errorMessage;
  }

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(text) ? "" : "Please enter valid email";
};
export const validateUserName = (
  username,
  errorMessage = "This is a required field"
) => {
  var re = /^[a-zA-Z\-]+$/;
  if (username.trim().length === 0) {
    return errorMessage;
  }
  return re.test(username)
    ? ""
    : "Only characters A-Z, a-z and '-' are  acceptable";
};

export const validatePassword = (
  text,
  errorMessage = "This is a required field"
) => {
  if (text.trim().length === 0) {
    return errorMessage;
  }
  let reg =
    /^(?=.*[0-9])(?=.*[!@#$%^&*?)(])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*?)(]{6,12}$/;
  return reg.test(text)
    ? ""
    : "Password Must contain at least one number and one uppercase and lowercase letter";
};
export const checkForEmpty = (
  text,
  errorMessage = "This is a required field"
) => {
  if (text.length === 0) {
    return errorMessage;
  }
  return "";
};

export const phoneValidation = (
  phone,
  errorMessage = "This is a required field"
) => {
  if (phone.trim().length === 0) {
    return errorMessage;
  } else if (isNaN(+phone)) {
    return "Phone must be a number";
  } else if (phone.trim().length < 10) {
    return "Phone Must be 10 digit number";
  }
  let reg = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
  return reg.test(phone) ? "" : "Please enter valid Phone";
};
export const validateConfirmPassword = (
  password1,
  password2,
  errorMessage = "Password does not match"
) => {
  if (password2.trim().length === 0) {
    return "This is a required field";
  }
  {
    if (password1 === password2) {
      return "";
    }
  }
  return errorMessage;
};
export const checkboxValidation = (
  check,
  errorMessage = "This is a required field"
) => {
  if (check === false) {
    return errorMessage;
  }
  return "";
};
export const checkForNationality = (
  text,
  errorMessage = "This is a required field"
) => {
  if (text === "-- Choose an option --") {
    return errorMessage;
  }
  return "";
};
