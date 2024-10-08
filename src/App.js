import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer.jsx";
import FooterBottom from "./components/home/Footer/FooterBottom.jsx";
import Header from "./components/home/Header/Header.jsx";
import HeaderBottom from "./components/home/Header/HeaderBottom.jsx";
import About from "./pages/About/About.jsx";
import SignIn from "./pages/Account/SignIn.jsx";
import SignUp from "./pages/Account/SignUp.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import Profile from "./pages/Profile/profile.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import FollowCursorButton from "./FollowCursorButton.js";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
      <FollowCursorButton />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
