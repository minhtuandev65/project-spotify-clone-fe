function CheckConfirmPassword({ password, confirmPassword }) {
  if (!confirmPassword) {
    return "Please re-enter password!";
  } else if (confirmPassword !== password) {
    return "Passwords do not match!";
  }
  return undefined;
}

export default CheckConfirmPassword;
