import React, { useState } from "react";
import "./login.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";

const Login = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
          />
          <path
            fill-rule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
          />
        </svg>
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <section className="container" id="upper-container">
        <div className="container">
          <h1 className="my-5">Login now</h1>
          <div className="form my-1">
            <form className="row g-3 needs-validation">
              <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  value="Mark"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  value="Otto"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label
                  htmlFor="validationCustomUsername"
                  className="form-label"
                >
                  Username
                </label>
                <div className="input-group has-validation">
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                    placeholder="Choose a unique username"
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  What's your school name
                </label>
                <input
                  placeholder="Just for security purpose nothing personal"
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom04" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="validationCustom04"
                  required
                >
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option>Tenessee</option>
                  <option>Wild west</option>
                  <option>Washington DC</option>
                  <option>Los angles</option>
                  <option>Los santos</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  required
                  placeholder="Enter your residential zip code"
                />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <Button
                  variant="contained"
                  onClick={handleClick}
                  id="button"
                  type="submit"
                >
                  Login now...
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={`Fill your form properly`}
          action={action}
        />
      }
    </>
  );
};

export default Login;
