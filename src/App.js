import "./style/Reset.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import Header from './components/Header/Header';
import Addcontact from './containers/Addcontact/Addcontact';
import Home from './containers/Home/Home';
import EditItem from "./containers/EditItem";
import Detail from "./containers/Detail/Detail";
function App() {
  return (
    <>
      <Router>
        <Header />
         <Routes>
            <Route path="/" exact={true}  element={<Home/>}/>
            <Route path="/addcontact" exact={true}  element={<Addcontact/>}/>
            <Route path="/edit/:id" exact={true}  element={<EditItem/>}/>
            <Route path="/more/:id" exact={true}  element={<Detail/>}/>
         </Routes>
      </Router>
    </>
  );
}

export default App;
