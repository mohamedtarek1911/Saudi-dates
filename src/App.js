import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import { Container } from "react-bootstrap";
import Header from "./Components/Navbar/Header";
import Test from "./Components/HomePage/Test";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      {/* <Test /> */}
    </>
  );
}

export default App;
