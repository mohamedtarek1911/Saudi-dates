import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import { Container } from "react-bootstrap";
import Header from "./Components/Navbar/Header";
import Test from "./Components/HomePage/Test";
import Test2 from "./Components/HomePage/Test2";
import Test3 from "./Components/HomePage/Test3";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      {/* <Test /> */}
      {/* <Test2 /> */}
      {/* <Test3 /> */}
    </>
  );
}

export default App;
