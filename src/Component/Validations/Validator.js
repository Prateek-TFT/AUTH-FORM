import {
  checkForEmpty,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateUserName,
  phoneValidation,
  checkboxValidation,
} from "./Validations";
export const Validator = (userData, checked) => {
  if (!checkboxValidation(checked)) {
    if (
      !checkForEmpty(userData.Name) &&
      !checkForEmpty(userData.Hobbies) &&
      !checkForEmpty(userData.Proffesion)
    ) {
      if (!validateEmail(userData.Email)) {
        if (!phoneValidation(userData.Phone)) {
          if (!validatePassword(userData.Password)) {
            if (
              !validateConfirmPassword(
                userData.Password,
                userData.ConfirmPassword
              )
            ) {
              if (!validateUserName(userData.UserName)) {
                fetch(
                  "https://authapp-5be7b-default-rtdb.firebaseio.com/userData.json",
                  {
                    method: "POST",
                    body: JSON.stringify(userData),
                  }
                ).then((res) => {
                  if (res.ok) {
                    alert("Data Saved Successfully");
                    console.log(userData);
                  }
                  res.json();
                });
              }
            }
          }
        }
      }
    }
  }
};
