import React, { useState } from "react";
import Style from "./Myinput.module.css";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { ErrorText } from "./ErrorText";
import { style } from "@mui/system";
const Myinput = (props) => {
  const [Showpassword, setShowpassword] = useState(false);

  const passwordhandler = () => {
    setShowpassword(!Showpassword);
  };
  return (
    <div className={Style.div}>
      <label className={Style.title}>{props.title}</label>
      {props.Mandatory ? <p className={Style.Asctrix}> *</p> : <p></p>}
      <div className={Style.setDirection}>
        <input
          className={Style.input}
          value={props.value}
          name={props.name}
          type={
            props.isPassword ? (Showpassword ? "text" : "Password") : props.type
          }
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        {props.isPassword ? (
          Showpassword ? (
            <VisibilityOffRoundedIcon
              fontSize="small"
              className={Style.Logo}
              onClick={passwordhandler}
            />
          ) : (
            <VisibilityRoundedIcon
              fontSize="small"
              className={Style.Logo}
              onClick={passwordhandler}
            />
          )
        ) : (
          ""
        )}
      </div>
      <ErrorText>{props.errortext}</ErrorText>
    </div>
  );
};
export default Myinput;
