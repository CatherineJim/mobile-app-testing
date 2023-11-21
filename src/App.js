import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/landingpage";
import { About } from "./pages/about";
import { LoginForm } from "./pages/Authentication/login";
import { Sidebar } from "./pages/dashboard/Sidebar/sidebar";
import { DashNav } from "./pages/dashboard/dashnavigation";
import { SearchBar } from "./searchbar/searchbar";
import Dashboard from "./pages/dashboard/dashboard";
import Card from "./Cards/cards";
import Userprofile from "./pages/dashboard/Userprofile/userprofile";
import { Signup } from "./pages/Authentication/signup";
import ChatRoom from "./pages/Chat/chatroom";
import { Community } from "./pages/Community/community";
import { Testing } from "./pages/Tests/testpage";
import Roles from "./pages/Role Confirmation/role";
import Appdetails from "./pages/App details/appdetails";
import Createtest from "./pages/Developer/uploadtest";
import { upload } from "@testing-library/user-event/dist/upload";
import Textbox from "./Components/textbox";
import Appcards from "./dashboardcards/dashboardcards";
import { AuthProvider } from "./context/context";
import Support from "./pages/Support/support";
import DevDashboard from "./pages/Developer/Developer Dashboard/Pages/dev-dashboard";
import ReviewPage from "./Components/Reviews/reviews";
import { Homepage } from "./pages/Home/home";
import { WriteReviews } from "./pages/Reviews/writereviews";
import DevSidebar from "./pages/Developer/Developer Dashboard/Pages/Dev-Sidebar/dev-sidebar";
import TesterRegistration from "./pages/Tester/testerreg";
import DevNavbar from "./pages/Developer/Developer Dashboard/Pages/Dev-Navbar/dev-navbar";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/sidebar" Component={Sidebar} />
          {/* <Route path="/content" Component={Content} /> */}
          <Route path="/login" Component={LoginForm} />
          <Route path="/signup" Component={Signup} />
          <Route path="/dashnavigation" Component={DashNav} />
          <Route path="/searchbar" Component={SearchBar} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/dashboard/chatroom" Component={ChatRoom} />
          <Route path="/cards" Component={Card} />
          <Route path="/dashboard/userprofile" Component={Userprofile} />
          <Route path="/userprofile" Component={Userprofile} />
          <Route path="/chatroom" Component={ChatRoom} />
          <Route path="/community" Component={Community} />
          <Route path="/testpage" Component={Testing} />
          <Route path="/role" Component={Roles} />
          <Route path="/appdetails" Component={Appdetails} />
          <Route path="/uploadtest" Component={Createtest} />
          <Route path="/textbox" Component={Textbox} />
          <Route path="/testerreg" Component={TesterRegistration} />
          <Route path="/dashboardcards/dasboardcards" Component={Appcards} />
          <Route path="/support" Component={Support} />
          <Route path="/dev-dashboard" Component={DevDashboard} />
          <Route path="/reviews" Component={ReviewPage} />
          <Route path="/home" Component={Homepage}></Route>
          <Route path="/writereviews" Component={WriteReviews} />
          <Route path="/dev-sidebar" Component={DevSidebar} />
          <Route path="/dev-navbar" Component={DevNavbar} />

          {/* <Route path="/login" Component={Signin} />
                <Route path="/signup" Component={Signup} />  */}
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
