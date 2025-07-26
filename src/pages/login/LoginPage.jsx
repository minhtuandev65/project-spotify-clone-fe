import { Login } from "@/components";
import Header from "@/layouts/header/Header";
import React from "react";

function LoginPage() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <Login />
      </div>
    </>
  );
}

export default LoginPage;
