import {
  checkForEmpty,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateUserName,
  phoneValidation,
  checkboxValidation,
} from "./Validations";
export const Validator = (
  userData,
  checked,
  setChecked,
  setUserData,
  setshouldPerformValidation
) => {
  setshouldPerformValidation(true);
  if (
    !checkboxValidation(checked) &&
    !checkForEmpty(userData.Name) &&
    !checkForEmpty(userData.Hobbies) &&
    !checkForEmpty(userData.Profession) &&
    !checkForEmpty(userData.Skills) &&
    !checkForEmpty(userData.Gender) &&
    !validateEmail(userData.Email) &&
    !phoneValidation(userData.Phone) &&
    !validateConfirmPassword(userData.Password, userData.ConfirmPassword) &&
    !validateUserName(userData.UserName) &&
    !validatePassword(userData.Password)
  )
    fetch("https://authapp-5be7b-default-rtdb.firebaseio.com/userData.json", {
      method: "POST",
      body: JSON.stringify(userData),
    }).then((res) => {
      if (res.ok) {
        alert("Data Saved Successfully");
        console.log(userData);
        const data = {
          Name: "",
          Email: "",
          Phone: "",
          Profession: "",
          Category: "",
          UserName: "",
          Password: "",
          ConfirmPassword: "",
          Hobbies: [],
          Gender: "",
          Skills: [],
        };
        setUserData(data);
        setshouldPerformValidation(false);
        setChecked(false);
      }
    });
};
