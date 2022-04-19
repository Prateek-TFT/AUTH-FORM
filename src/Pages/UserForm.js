import "./UserForm.css";
import Myinput from "../Component/Input/Myinput";
import React, { useEffect, useState } from "react";
import {
  checkForEmpty,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  phoneValidation,
  checkboxValidation,
  validateUserName,
} from "../Component/Validations/Validations";
import { Skills } from "../Component/Skills/Skills";
import { Validator } from "../Component/Validations/Validator";
import { Gender } from "../Component/Gender/Gender";
import { SingleSelect } from "../Component/Select/SingleSelect";
import { MultiSelect } from "../Component/Select/MultiSelect";
import {
  HobbiesData,
  JuniorDeveloper,
  ProfessionType,
  ProffesionType,
  SeniorDeveloper,
  Trainee,
} from "../Component/Utils";

function UserForm() {
  const [userData, setUserData] = useState({
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
  });
  const InputData = [
    {
      value: userData.Name,
      name: "Name",
      title: "Name",
      validation: checkForEmpty(userData.Name, "Name is a required field."),
      Mandatory: true,
    },
    {
      value: userData.Email,
      name: "Email",
      title: "Email",
      validation: validateEmail(userData.Email, "Email is a required field."),
      Mandatory: true,
    },
    {
      value: userData.Phone,
      type: "number",
      name: "Phone",
      title: "Phone",
      validation: phoneValidation(userData.Phone, "Phone is a required field."),
      Mandatory: true,
    },
    {
      value: userData.UserName,
      name: "UserName",
      title: "UserName",
      validation: validateUserName(
        userData.UserName,
        "Username is a required field."
      ),
      Mandatory: true,
    },
    {
      value: userData.Password,
      name: "Password",
      title: "Password",
      validation: validatePassword(
        userData.Password,
        "Password is a required field."
      ),
      Mandatory: true,
      isPassword: true,
    },
    {
      value: userData.ConfirmPassword,
      name: "ConfirmPassword",
      title: "Confirm-Password",
      validation: validateConfirmPassword(
        userData.Password,
        userData.ConfirmPassword
      ),
      Mandatory: true,
      isPassword: true,
    },
  ];
  const [shouldPerformValidation, setshouldPerformValidation] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangeHobbies = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: typeof value === "string" ? value.split(",") : value,
    }));
  };
  const SubmitHandler = () => {
    Validator(
      userData,
      checked,
      setChecked,
      setUserData,
      setshouldPerformValidation
    );
  };
  let Category = [];
  if (userData.Profession === "Trainee") {
    Category = Trainee;
  } else if (userData.Profession === "Junior-Developer") {
    Category = JuniorDeveloper;
  } else if (userData.Profession === "Senior-Developer") {
    Category = SeniorDeveloper;
  }
  useEffect(() => {
    if (userData.Profession === "HR") {
      setUserData((prevState) => ({
        ...prevState,
        ["Category"]: "",
      }));
    }
  }, [userData.Profession]);
  return (
    <div className="box">
      <div className="heading_div">
        <h1>User Form</h1>
      </div>
      <div className="input_div">
        {InputData.map((item, index) => {
          return (
            <Myinput
              key={index}
              type={item.type}
              value={item.value}
              name={item.name}
              onChange={handleChange}
              Mandatory={item.Mandatory}
              title={item.title}
              isPassword={item.isPassword}
              errortext={shouldPerformValidation ? item.validation : ""}
            ></Myinput>
          );
        })}
        <SingleSelect
          className="select1"
          title="Profession"
          name="Profession"
          value={userData.Profession}
          onChange={handleChange}
          label="Profession"
          validate={shouldPerformValidation}
          data={ProfessionType}
        />
        {userData.Profession && userData.Profession !== "HR" && (
          <SingleSelect
            className="select"
            title="Categories"
            name="Category"
            value={userData.Category}
            onChange={handleChange}
            label="Categories"
            validate={shouldPerformValidation}
            data={Category}
          />
        )}
        <MultiSelect
          className="select"
          title="Hobbies"
          name="Hobbies"
          value={userData.Hobbies}
          onChange={handleChangeHobbies}
          data={HobbiesData}
          validate={shouldPerformValidation}
        />
        <Gender
          value={userData.Gender}
          validate={shouldPerformValidation}
          setData={(data) =>
            setUserData((prevState) => ({
              ...prevState,
              ["Gender"]: data,
            }))
          }
        />
        <Skills
          validate={shouldPerformValidation}
          setData={(data) => {
            setUserData((prevState) => ({
              ...prevState,
              ["Skills"]: data,
            }));
          }}
        />
      </div>
      <div className="buttonContainer">
        <div>
          <input
            checked={checked === true}
            onChange={() => setChecked(!checked)}
            type="checkbox"
          ></input>
          <p>I accept the term and condition</p>
        </div>
        <p className="trm_text">
          {shouldPerformValidation
            ? checkboxValidation(
                checked,
                "Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy"
              )
            : ""}
        </p>
        <div className="buttonAlign">
          <button onClick={SubmitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
