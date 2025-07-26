export const handleSearch = (keyword, navigate, dispatch) => {
  if (keyword.trim()) {
    // gọi hàm để truyền dữ liệu cho server
    // dispatch(...(keyword))
    navigate(`/home/search?keyword=${encodeURIComponent(keyword)}`);
  }
};
