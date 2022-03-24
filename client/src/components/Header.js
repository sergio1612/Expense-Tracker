import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./header.css";
import "../styles/landing.css";

const Header = (props) => {
  // {console.log(props.user)}
  return (
    <nav className="navbar navbar-expand-lg navbar-light landingNav fixed-top">
      <NavLink to="/">
        <h3 className="landing-name">Expense Tracker</h3>
      </NavLink>

      <div className="float">
        <NavLink className="nav-item" to="/login">
          Log In
        </NavLink>
        <NavLink className="nav-item" to="/signup">
          Join Us!
        </NavLink>
      </div>
    </nav>
  );
    };

const mapStateToProps = (state) => {
  // console.log("state is  ",state);
  return {
    user: state.user,
  };
};

const fn = connect(mapStateToProps);
export default fn(Header);
