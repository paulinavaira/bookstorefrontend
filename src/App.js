import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AdminPanel from "./pages/AdminPanel";
import Book from "./pages/Book";
import Catalogue from "./pages/Catalogue";
import CustomerCart from "./pages/CustomerCart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/catalogue" component={Catalogue}/>
          <Route path="/books/:id" component={Book}/>
          <Route path="/cart" component={CustomerCart}/>
          <Route path="/admin/panel" component={AdminPanel}/>
          <Redirect to="/"/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
