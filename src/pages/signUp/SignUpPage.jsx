import { SignUp } from "@/components";
import Header from "@/layouts/header/Header";
import React from "react";

function SignUpPage() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <SignUp />
      </div>
      {/* footer */}
    </>
  );
}

export default SignUpPage;
