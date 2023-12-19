// import logo from './logo.svg';
import "./App.scss";
// @use 'styles/_colors.scss';
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";


function App() {
  const [values, setValues] = React.useState({
    password: "fsdgfdfdgssfgsgfsgf",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  return (
    <div className="app">
      <header className="title">Profile settings</header>
      <div className="contact_form">
        <div className="img_form">
          <img alt="" className="img_profile" />
          <div className="img-picker">
            {/* <label for="input-image" id="drop_img">
									<input type='file' accept='image/*' id='input-file' />
								</label> */}
            <div className="icon_cont">
              <label htmlFor="input-image" id="drop_img">
                <input type="file" accept="image/*" id="input-image" />
                <div className="circle-background"></div>
                <div className="iconCamera"></div>
              </label>
            </div>
          </div>
					<p className="first_last_name">Alexander Kovalenko</p>
        </div>
        
        <form className="form_container">
          <label for="first_name" className="form_label">
            First Name
            <input
              className="form_input"
              type="text"
              name="firstName"
              placeholder="Ім'я"
              value={`Alexander`}
            />
          </label>
          <label for="last_name" className="form_label">
            Last Name
            <input
              className="form_input"
              type="text"
              name="lastName"
              placeholder="Прізвище"
              value={`Kovalenko`}
            />
          </label>
          <label for="email" className="form_label">
            Email
            <input
              className="form_input"
              type="email"
              name="email"
              placeholder="Електронна пошта"
              value={`alexander.kovalenko@gmail.com`}
            />{" "}
          </label>
          <label for="number" className="form_label">
            Phone number
            <input
              className="form_input"
              type="text"
              name="mobileNumber"
              placeholder="Мобільний номер"
              value={`+380 98 378 290`}
            />
          </label>
          <label for="pass" className="form_label last">
            Password
            <input
              className="form_input "
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              // value={values.password}
              value={`46536erbdfgdfdfssdf`}
            />
          </label>
          <IconButton
            className="showPass"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {values.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>

          {/* <div className='showPass' style={{width: '100%', height: '100%', position: 'relative'}}>
             <div className='showPass' style={{width: 20, height: 15.50, top: 3, position: 'absolute', background: '#'}}></div>
            </div> */}
          <div className="buttons">
            <button className="btn_submit" type="submit">
              Save
            </button>
            <button className="btn_cancel" type="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
