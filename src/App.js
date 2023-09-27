import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
     return (
          <div className="App">
               <Routes>
                    <Route exact path="/" />
               </Routes>
               <Routes>
                    <Route exact path="/" element={<Login />} />
               </Routes>
               <Routes>
                    <Route
                         exact
                         path="/home"
                         element={
                              <>
                                   <Header />
                                   <Home />
                              </>
                         }
                    ></Route>
               </Routes>
          </div>
     );
}

export default App;
