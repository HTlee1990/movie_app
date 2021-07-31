import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation"
import Detail from "./routes/Detail"

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      {/* 여기에서 /:id라고 한 값은 변수처리 된다. 만약/id라고 한다면 제대로 적용되지 않는다. */}
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;


// BrowserRouter 과 HashRouter의 차이????
// 거의 없다. 단지. Hash는 url중간에 #이라는 이상한게 들어간다.
// 그렇지만, github에 페이지를 만들때는 Hash가 더 편하다. 