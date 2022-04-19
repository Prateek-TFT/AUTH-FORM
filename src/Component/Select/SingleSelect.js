import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { ErrorText } from "../Input/ErrorText";
import { checkForEmpty } from "../Validations/Validations";

export const SingleSelect = (props) => {
  return (
    <FormControl className={props.className}>
      <InputLabel
        sx={{ fontSize: 11, fontWeight: 600, marginTop: 1.5 }}
        id="demo-multiple-name-label"
      >
        {props.title}
      </InputLabel>
      <Select
        sx={{ height: 40, margin: 0 }}
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        label={props.label}
      >
        <MenuItem value="">
          <em>--Select--</em>
        </MenuItem>
        {props.data.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
      <ErrorText>{props.validate ? checkForEmpty(props.value) : ""}</ErrorText>
    </FormControl>
  );
};
