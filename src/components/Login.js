import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../css/Login.css";
import { Link } from 'react-router-dom';


const Login = () => (
  <div className='bgn'>
    <p className='h'>Login</p>
  <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email("Unesite valjano korisnicko ime")
        .required("Unesite korisnicko ime"),
      password: Yup.string()
        .required("Unesite lozinku.")
        .min(8, "Lozinka je prekratka - minimalno 8 znamenki.")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Lozinka mora sadrzavati minalno 1 broj i 1 specijalni znak.")
      })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Korisnicko ime:</label>
          <input
            name="email"
            type="text"
            placeholder="Unesite korisnicko ime"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Lozinka:</label>
          <input
            name="password"
            type="password"
            placeholder="Unesite lozinku"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            <Link to="/adresar">
            Login
            </Link>
          </button>
        </form>
      );
    }}
  </Formik>
  </div>
);

export default Login;
