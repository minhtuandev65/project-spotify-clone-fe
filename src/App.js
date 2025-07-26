import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUpPage from "./pages/signUp/SignUpPage";
import LoginPage from "./pages/login/LoginPage";
import UserAccountPage from "./pages/user/userAccount/UserAccountPage";
import {
  AudioPlayer,
  InfoUserForm,
  Loading,
  AudioCard,
  AudioDetail,
  ArtistDetail,
} from "./components";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Loading />
        <Routes>
          {/* Các Route */}
          {/* Route đăng ký */}
          <Route path="/signUp" element={<SignUpPage />} />
          {/* Route đăng nhập */}
          <Route path="/login" element={<LoginPage />} />
          {/* Route Home */}
          <Route path="/" element={<UserAccountPage />}>
            <Route index element={<AudioCard />} />
            <Route path=":types" element={<AudioCard />} />
            <Route path="music/:id/detail" element={<AudioDetail />} />
            <Route path="artist/:id/detail" element={<ArtistDetail />} />
          </Route>
          <Route path="/my_account" element={<UserAccountPage />}>
            <Route path="info" element={<InfoUserForm />} />
          </Route>
        </Routes>
        <AudioPlayer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
