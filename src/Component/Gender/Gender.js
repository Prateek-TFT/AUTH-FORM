import React, { useEffect, useState } from "react";
import { checkForEmpty } from "../Validations/Validations";
import { ErrorText } from "../Input/ErrorText";
import "./Gender.css";
export const Gender = (props) => {
  const [Gender, SetGender] = useState("");
  const handleChange = (e) => {
    SetGender(e.target.value);
  };
  useEffect(() => {
    props.setData(Gender);
  }, [Gender]);
  useEffect(() => {
    if (props.value === "") {
      SetGender("");
    }
  }, [props.value]);
  return (
    <div className="genderdiv">
      <p className="p">Gender:</p>
      <div className="optiondiv">
        <input
          type="radio"
          id="Male"
          value="Male"
          checked={Gender === "Male"}
          onChange={handleChange}
        />
        <label for="html">Male</label>
        <input
          type="radio"
          id="Female"
          value="Female"
          checked={Gender === "Female"}
          onChange={handleChange}
        />
        <label for="css">Female</label>
        <input
          type="radio"
          id="Others"
          value="Others"
          checked={Gender === "Others"}
          onChange={handleChange}
        />
        <label for="javascript">Others</label>
      </div>
      <ErrorText>
        {props.validate
          ? checkForEmpty(Gender, "Gender is a required field.")
          : ""}
      </ErrorText>
    </div>
  );
};
