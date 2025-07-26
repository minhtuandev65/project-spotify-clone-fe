export const handleLogout = async (navigate) => {
  // gọi hàm logout
  // dispatch(logout())
  localStorage.removeItem("USER_LOGIN");
  navigate("/login");
};
