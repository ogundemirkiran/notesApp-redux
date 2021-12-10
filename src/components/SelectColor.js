import React from "react";
import SaveButton from "./SaveButton";
import { SimpleGrid } from "@mantine/core";

import "../App.css";

function SelectColor({ form, color, setColor }) {
  const handleOnChange = (value) => {
    setColor(value);
  };

  return (
    <div className="d-flex justify-content-between px-2 selectColorContent">
      <SimpleGrid
        cols={8}
        spacing="xs"
        style={{ zIndex: 1 }}
        breakpoints={[
          { maxWidth: 600, cols: 4, spacing: "sm" },
          { maxWidth: 370, cols: 2, spacing: "sm" },
        ]}
      >
        <div className="form-check">
          <input
            className="form-check-input  bg-primary p-3 me-1"
            type="radio"
            name="flexRadioDefault"
            id="radioprimary"
            value="primary"
            onChange={(e) => handleOnChange(e.target.value)}
            checked={color !== "" && color === "primary" && true}
          />
          <label className="form-check-label" htmlFor="radioprimary"></label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input  bg-secondary p-3 me-1"
            type="radio"
            name="flexRadioDefault"
            id="radiosecondary"
            value="secondary"
            onChange={(e) => handleOnChange(e.target.value)}
            checked={color !== "" && color === "secondary" && true}
          />
          <label className="form-check-label" htmlFor="radiosecondary"></label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input  bg-success p-3 me-1"
            type="radio"
            name="flexRadioDefault"
            id="radiosuccess"
            value="success"
            onChange={(e) => handleOnChange(e.target.value)}
            checked={color !== "" && color === "success" && true}
          />
          <label className="form-check-label" htmlFor="radiosuccess"></label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input  bg-danger p-3 me-1"
            type="radio"
            name="flexRadioDefault"
            id="radiodanger"
            value="danger"
            onChange={(e) => handleOnChange(e.target.value)}
            checked={color !== "" && color === "danger" && true}
          />
          <label className="form-check-label" htmlFor="radiodanger"></label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input  bg-warning p-3 me-1"
            type="radio"
            name="flexRadioDefault"
            id="radiowarning"
            value="warning"
            onChange={(e) => handleOnChange(e.target.value)}
            checked={color !== "" && color === "warning" && true}
          />
          <label className="form-check-label" htmlFor="radiowarning"></label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input  bg-info p-3 me-1"
            type="radio"
            name="flexRadioDefault"
            id="radioinfo"
            value="info"
            onChange={(e) => handleOnChange(e.target.value)}
            checked={color !== "" && color === "info" && true}
          />
          <label className="form-check-label" htmlFor="radioinfo"></label>
        </div>

        <div className="form-check ">
          <input
            className="form-check-input   bg-dark p-3 me-1 "
            type="radio"
            name="flexRadioDefault"
            id="radiodark"
            value="dark"
            onChange={(e) => handleOnChange(e.target.value)}
            checked={color !== "" && color === "dark" && true}
          />
          <label className="form-check-label" htmlFor="radiodark"></label>
        </div>
      </SimpleGrid>
      <div>
        <SaveButton />
      </div>
    </div>
  );
}

export default SelectColor;
