import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home"
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
// import "./App.css";

function App(){
  return <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}/>
    {/* exact={true} 는 렌더링 할때 /와 일치하는 경우에만 렌더링 */}
    <Route path="/about" component={About}/>
    <Route path="/movie-detail" component={Detail}/>
  </HashRouter>
}
//HashRouter 같은 경우는 배포가 편리하다. 다만 주소에 #이 붙어서 주소창이 안깔끔하고, 서버에 요청을 안해서 페이지만 바뀌는'척'한다고 한다.
export default App;