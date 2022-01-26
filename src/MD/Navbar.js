import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { Link, useParams } from "react-router-dom";
import "./Navbar.css";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };
const Navbar = (props) => {
  const { id } = useParams();
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
      <Button variant="contained" size="small" onClick={handleClose}>
        close
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
      <nav
        className={`navbar navbar-${props.moded} bg-${props.moded} fixed-top`}
        id="upperNavigation"
      >
        <div className="container-fluid">
          <h1 className="navbar-brand">Navigation</h1>
          <ul id="margined-Ul-list" className="navbar-navs">
            <li className="navbar-nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-nav">
              <Link to="/developer" className="nav-link">
                For developers
              </Link>
            </li>
            <li className="navbar-nav">
              <a
                className="nav-link"
                href="https://github.com/AnshuNaagar"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </li>
            <li className="navbar-nav">
              <a
                className="nav-link"
                href="https://www.blackpinkmusic.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Forums
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <Switch
              onClick={props.enableDarkModed}
              onChange={handleClick}
              {...label}
              defaultChecked
              color="warning"
            />
            <button
              id="buttonToggleUpOffCanvas"
              className="navbar-toggle"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div
              className={`offcanvas-header bg-${props.moded} text-${
                props.moded === "dark" ? "white" : "black"
              }`}
            >
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className={`btn-close text-reset bg-${props.moded} text-${
                  props.moded === "dark" ? "white" : "black"
                }`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className={`offcanvas-body bg-${props.moded}`}>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/developer">
                    Developer
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/AnshuNaagar/textUtility"
                  >
                    View code
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/Login" className="nav-link">
                    Login Now
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/apidocs" className="nav-link">
                    API docs
                  </Link>
                </li>
              </ul>
              <form className="d-flex m-left-5">
                <Switch
                  onClick={props.enableDarkModed}
                  {...label}
                  defaultChecked
                  color="warning"
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
      {props.moded === "dark" && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={`Dark mode occurs successfully`}
          action={action}
        />
      )}
    </>
  );
};

export default Navbar;
