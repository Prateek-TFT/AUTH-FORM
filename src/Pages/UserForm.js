import "./UserForm.css";
import Myinput from "../Component/Input/Myinput";
import React, { useState } from "react";
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
import { DeveloperType, HobbiesData, ProffesionType } from "../Component/Utils";

function UserForm() {
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Proffesion: "",
    DeveloperType: "",
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
      validation: checkForEmpty(userData.Name),
      Mandatory: true,
    },
    {
      value: userData.Email,
      name: "Email",
      title: "Email",
      validation: validateEmail(userData.Email),
      Mandatory: true,
    },
    {
      value: userData.Phone,
      type: "number",
      name: "Phone",
      title: "Phone",
      validation: phoneValidation(userData.Phone),
      Mandatory: true,
    },
    {
      value: userData.UserName,
      name: "UserName",
      title: "UserName",
      validation: validateUserName(userData.UserName),
      Mandatory: true,
    },
    {
      value: userData.Password,
      name: "Password",
      title: "Password",
      validation: validatePassword(userData.Password),
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
  return (
    <div className="box">
      <div className="heading_div">
        <h1>User Form</h1>
      </div>
      <div className="input_div">
        {InputData.map((item) => {
          return (
            <Myinput
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
          title="Proffesion"
          name="Proffesion"
          value={userData.Proffesion}
          onChange={handleChange}
          label="Proffesion"
          validate={shouldPerformValidation}
          data={ProffesionType}
        />
        {userData.Proffesion && (
          <SingleSelect
            className="select"
            title="Developer-Type"
            name="DeveloperType"
            value={userData.DeveloperType}
            onChange={handleChange}
            label="Developer-Type"
            validate={shouldPerformValidation}
            data={DeveloperType}
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
          {shouldPerformValidation ? checkboxValidation(checked) : ""}
        </p>
        <div className="buttonAlign">
          <button onClick={SubmitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
