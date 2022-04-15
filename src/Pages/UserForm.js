import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./UserForm.css";
import Myinput from "../Component/Input/Myinput";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import React, { useEffect, useState } from "react";
import { ErrorText } from "../Component/Input/ErrorText";

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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const hobbies = ["cricket", "football", "ludo", "Reading", "Music"];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function UserForm() {
  const theme = useTheme();
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Proffesion: "",
    UserName: "",
    Password: "",
    ConfirmPassword: "",
    Hobbies: [],
    Gender: "",
    Skills: [],
  });
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
    setshouldPerformValidation(true);
    Validator(userData, checked);
  };
  useEffect(() => {
    setTimeout(() => {
      setshouldPerformValidation(false);
    }, 5000);
  }, [shouldPerformValidation]);
  return (
    <div className="box">
      <div className="heading_div">
        <h1>User Form</h1>
      </div>
      <div className="input_div">
        <Myinput
          name="Name"
          onChange={handleChange}
          Mandatory={true}
          title="Name"
          errortext={
            shouldPerformValidation ? checkForEmpty(userData.Name) : ""
          }
        ></Myinput>
        <Myinput
          name="Email"
          Mandatory={true}
          onChange={handleChange}
          title="Email"
          errortext={
            shouldPerformValidation ? validateEmail(userData.Email) : ""
          }
        ></Myinput>
        <Myinput
          name="Phone"
          Mandatory={true}
          onChange={handleChange}
          title="Phone"
          errortext={
            shouldPerformValidation ? phoneValidation(userData.Phone) : ""
          }
        ></Myinput>
        <FormControl sx={{ m: 1 }} className="formcontrol">
          <InputLabel
            sx={{ fontSize: 11, fontWeight: 600 }}
            id="demo-multiple-name-label"
          >
            Profession
          </InputLabel>
          <Select
            sx={{ height: 40 }}
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            name="Proffesion"
            value={userData.Proffesion}
            onChange={handleChange}
            label="Profession"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Trainee"}>Trainee</MenuItem>
            <MenuItem value={"jr.Developer"}>jr.Developer</MenuItem>
            <MenuItem value={"sr.Developer"}>sr.Developer</MenuItem>
          </Select>
          <ErrorText>
            {shouldPerformValidation ? checkForEmpty(userData.Proffesion) : ""}
          </ErrorText>
        </FormControl>

        <Myinput
          name="UserName"
          Mandatory={true}
          onChange={handleChange}
          title="Username"
          errortext={
            shouldPerformValidation ? validateUserName(userData.UserName) : ""
          }
        ></Myinput>
        <Myinput
          name="Password"
          isPassword={true}
          Mandatory={true}
          onChange={handleChange}
          title="Password"
          errortext={
            shouldPerformValidation ? validatePassword(userData.Password) : ""
          }
        ></Myinput>
        <Myinput
          name="ConfirmPassword"
          onChange={handleChange}
          isPassword={true}
          Mandatory={true}
          title="Confirm-password"
          errortext={
            shouldPerformValidation
              ? validateConfirmPassword(
                  userData.Password,
                  userData.ConfirmPassword
                )
              : ""
          }
        ></Myinput>

        <FormControl sx={{ m: 1 }} className="formcontrol">
          <InputLabel
            sx={{ fontSize: 11, fontWeight: 600 }}
            id="demo-multiple-name-label"
          >
            Hobbies
          </InputLabel>
          <Select
            sx={{ height: 40, margin: 0 }}
            name="Hobbies"
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={userData.Hobbies}
            onChange={handleChangeHobbies}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {hobbies.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, userData.Hobbies, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
          <ErrorText>
            {shouldPerformValidation ? checkForEmpty(userData.Hobbies) : ""}
          </ErrorText>
        </FormControl>
        <Gender
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
          setData={(data) =>
            setUserData((prevState) => ({
              ...prevState,
              ["Skills"]: data,
            }))
          }
        />
      </div>
      <div className="buttonContainer">
        <div>
          <input
            value={checked}
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
