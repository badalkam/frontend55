import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./components/Header";
import Item from "./pages/Item"
import List from "./pages/List"
import Create from "./pages/Create"
import List1 from "./pages/List1";
import Recover from "./pages/Recover";
import Reset from "./pages/Reset";
import ProfileList from "./pages/ProfileList";
import List3 from "./pages/list3";
import List4 from "./pages/list4";
import Edit from "./pages//Edit";
import RecoverOTP from "./pages/Recovercopy";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Footer from "./components/Footer";
import Input from "./pages/Input";
import Info from "./pages/Info";






function App() {
  return (
    <BrowserRouter >
    <Header/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route element={<ProtectedRoutes/>}>

        {/* <Route path="/profile" element={ <Profile/> }/> */}
        <Route path="/list3" element={<List3/>} />
        <Route path="/list4" element={<List4/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit" element={<Edit/>} />
        </Route>

        {/* <Route path="/profile-list" element={<ProfileList/>} /> */}
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/recover" element={<Recover/>} />
        <Route path="/recoverOTP" element={<RecoverOTP/>} />
        <Route path="/reset" element={<Reset/>} />
        



        <Route path="/item/:id" element={<Item/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/list1" element={<List1/>} />
        <Route path="/input" element={<Input/>} />
        <Route path="/" element={<Info/>} />
        {/* <Route path="/home" element={<ProfileList/>} /> */}
        
        
      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
