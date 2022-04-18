import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "../../Pages/UserForm.css";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";
import { ErrorText } from "../Input/ErrorText";
import { checkForEmpty } from "../Validations/Validations";
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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export const MultiSelect = (props) => {
  const theme = useTheme();
  return (
    <FormControl className={props.className}>
      <InputLabel
        sx={{ fontSize: 11, fontWeight: 600, marginTop: 0.5 }}
        id="demo-multiple-name-label"
      >
        {props.title}
      </InputLabel>
      <Select
        sx={{ height: 40, margin: 0, marginTop: 0.5 }}
        name={props.name}
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={props.value}
        onChange={props.onChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {props.data.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, props.value, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
      <ErrorText>{props.validate ? checkForEmpty(props.value) : ""}</ErrorText>
    </FormControl>
  );
};
