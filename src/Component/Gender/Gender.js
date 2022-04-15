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
  return (
    <div className="genderdiv">
      <p className="p">Gender:</p>
      <div className="optiondiv">
        <input
          type="radio"
          id="Male"
          name="Gender"
          value="Male"
          onChange={handleChange}
        />
        <label for="html">Male</label>
        <input
          type="radio"
          id="Female"
          name="Gender"
          value="Female"
          onChange={handleChange}
        />
        <label for="css">Female</label>
        <input
          type="radio"
          id="Others"
          name="Gender"
          value="Others"
          onChange={handleChange}
        />
        <label for="javascript">Others</label>
      </div>
      <ErrorText>{props.validate ? checkForEmpty(Gender) : ""}</ErrorText>
    </div>
  );
};
