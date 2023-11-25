import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/image2.jpeg" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Login"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
