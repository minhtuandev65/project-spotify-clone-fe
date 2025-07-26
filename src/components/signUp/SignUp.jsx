import {
  CheckConfirmPassword,
  CheckErrorEmail,
  CheckErrorFullName,
  CheckErrorPassword,
} from "@/utils/checkErrors";
import { handleChangeWithTouch } from "@/utils/handle";

import { Button, Input, Typography } from "antd";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;
function SignUp() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validate: (values) => {
      const errors = {};
      /* Kiểm tra fullName đã nhập đúng hay chưa */
      const checkFullNameError = CheckErrorFullName(values.fullName);
      if (checkFullNameError) {
        errors.fullName = checkFullNameError;
      }
      /* Kiểm tra email đã nhập đúng hay chưa */
      const checkEmailError = CheckErrorEmail(values.email);
      if (checkEmailError) {
        errors.email = checkEmailError;
      }
      /* Kiểm tra password đã nhập đúng hay chưa */
      const checkPasswordError = CheckErrorPassword(values.password);
      if (checkPasswordError) {
        errors.password = checkPasswordError;
      }
      /* Kiểm tra mật khẩu có khớp hay không */
      const checkConfirmPassword = CheckConfirmPassword({
        password: values.password,
        confirmPassword: values.confirmPassword,
      });
      if (checkConfirmPassword) {
        errors.confirmPassword = checkConfirmPassword;
      }
      return errors;
    },
    onSubmit: async (values) => {
      //   const { confirmPassword, ...signupData } = values;
      try {
        // Xử lý gửi data về server
      } catch (error) {
        // Có thể xử lý lỗi ở đây
      }
    },
  });
  const { handleSubmit, values, errors, touched } = formik;
  return (
    <div className="main">
      <form onSubmit={handleSubmit} autoComplete="off" className="form-page">
        <div className="text-center">
          <Title level={3}>Sign Up</Title>
        </div>

        {/* Full Name input */}
        <div className="mb-6">
          {touched.fullName && errors.fullName && (
            <Text type="danger">{errors.fullName}</Text>
          )}
          <Input
            name="fullName"
            placeholder="Full Name"
            autoComplete="fullName"
            value={values.fullName}
            onChange={handleChangeWithTouch(formik)}
            status={touched.fullName && errors.fullName ? "error" : "success"}
            className="custom-input"
          />
        </div>
        {/* Email */}
        <div className="mb-6">
          {touched.email && errors.email && (
            <Text type="danger">{errors.email}</Text>
          )}
          <Input
            name="email"
            placeholder="useremail@example.com"
            autoComplete="email"
            value={values.email}
            onChange={handleChangeWithTouch(formik)}
            status={touched.email && errors.email ? "error" : "success"}
            className="custom-input"
          />
        </div>
        {/* PASSWORD */}
        <div className="mb-6">
          {touched.password && errors.password && (
            <Text type="danger">{errors.password}</Text>
          )}
          <Input.Password
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            value={values.password}
            onChange={handleChangeWithTouch(formik)}
            status={touched.password && errors.password ? "error" : "success"}
            className="custom-input"
          />
        </div>

        {/* XÁC NHẬN MẬT KHẨU */}
        <div className="mb-6">
          {touched.confirmPassword && errors.confirmPassword && (
            <Text type="danger">{errors.confirmPassword}</Text>
          )}
          <Input.Password
            name="confirmPassword"
            placeholder="Confirm password"
            autoComplete="new-password"
            value={values.confirmPassword}
            onChange={handleChangeWithTouch(formik)}
            status={
              touched.confirmPassword && errors.confirmPassword
                ? "error"
                : "success"
            }
            className="custom-input"
          />{" "}
        </div>
        {/* Nút Đăng Ký */}
        <div className="text-center">
          <Button htmlType="submit" className="custom-button">
            Sign Up
          </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link
            to="/login"
            className="#1890ff "
            style={{
              marginRight: 8,
              textDecoration: "none",
              color: "#1890ff",
              fontWeight: 500,
            }}
          >
            You already have an account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
