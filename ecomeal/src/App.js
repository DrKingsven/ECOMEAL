import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Page/Profile";
import AppBarMenu from "./components/AppBarMenu/AppBarMenu";
import NavigateMenu from "./components/NavigateMenu";
import {Box} from "@mui/material";
import CardList from "./components/CardList";
import Profile from "./Page/Profile"
function App() {
  return (
      <>
        <AppBarMenu/>
  <Routes>
    {/*<Route element={<Home/>} path={"/"}/>*/}
      <Route path="/navigate" element={<NavigateMenu/>}>
          <Route index element={<CardList filterClass={null}/>} />
          <Route path={"meal"} element={<CardList filterClass={"продукты питания"}/>} />
          <Route path={"beauty"} element={<CardList filterClass={"красота и уход"}/>} />
          <Route path={"vegetables"} element={<CardList filterClass={"фрукты и овощи"}/>} />
          <Route path={"household"} element={<CardList filterClass={"бытовые товары"}/>} />
          <Route path={"drinks"} element={<CardList filterClass={"напитки"}/>} />
          <Route path={"kids"} element={<CardList filterClass={"детские товары"}/>} />
          <Route path={"seed"} element={<CardList filterClass={"зерновые продукты"}/>} />
          <Route path={"gifts"} element={<CardList filterClass={"подарки и сувениры"}/>} />
      </Route>
      <Route path="/profile" element={<Profile/>}/>
  </Routes>
      </>
  );
}

export default App;