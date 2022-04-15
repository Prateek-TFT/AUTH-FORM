import React, { useEffect, useState } from "react";
import { ErrorText } from "../Input/ErrorText";
import { checkForEmpty } from "../Validations/Validations";
import "./Skills.css";
export const Skills = (props) => {
  const [skills, setSkills] = useState([]);
  const Skills = [
    { value: "C" },
    { value: "C++" },
    { value: "Python" },
    { value: "Java" },
    { value: "React-Js" },
    { value: "React-Native" },
  ];
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills((prevSkills) => {
        return [...prevSkills, value];
      });
    } else {
      setSkills((prevSkills) => prevSkills.filter((e) => e !== value));
    }
  };
  useEffect(() => {
    props.setData(skills);
  }, [skills]);
  return (
    <>
      <div className="skillContainer">
        <p className="heading">Skills:-</p>
        {Skills.map((data, index) => {
          return (
            <div key={index} className="skillsdiv">
              <input
                name="Skills"
                value={data.value}
                type="checkbox"
                onChange={handleChange}
              />
              <p>{data.value}</p>
            </div>
          );
        })}
      </div>
      <ErrorText>{props.validate ? checkForEmpty(skills) : ""}</ErrorText>
    </>
  );
};