import { Button, Input, Typography } from "antd";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const { Title } = Typography;
function Login() {
  const navigate = useNavigate();
  const initialValues = {
    fullName: "Cybersoft",
    email: "Cybersoft@gmail.com",
    password: "Cybersoft@123",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        // Gửi values lên server
        localStorage.setItem("USER_LOGIN", JSON.stringify(initialValues));
        navigate("/");
      } catch (error) {
        // Xử lý lỗi
      }
    },
  });

  const { handleSubmit, values } = formik;
  return (
    <div className="main">
      <form onSubmit={handleSubmit} autoComplete="off" className="form-page">
        <div className="text-center">
          <Title level={3}>Login</Title>
        </div>
        {/* Email */}
        <div className="mb-6">
          <Input
            name="email"
            placeholder="useremail@example.com"
            autoComplete="email"
            value={values.email}
            className="custom-input"
          />
        </div>
        {/* PASSWORD */}
        <div className="mb-6">
          <Input.Password
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            value={values.password}
            className="custom-input"
          />
        </div>

        {/* Nút Đăng Nhập */}
        <div className="text-center">
          <Button htmlType="submit" className="custom-button">
            Login
          </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link
            to="/signUp"
            className="#1890ff "
            style={{
              marginRight: 8,
              textDecoration: "none",
              color: "#1890ff",
              fontWeight: 500,
            }}
          >
            Resgister
          </Link>

          <Link
            to="/account/forgotPassword"
            style={{
              textDecoration: "none",
              color: "#6e6060",
              fontWeight: 500,
            }}
          >
            Forgot password
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
