import "../../src/assets/Styles/Style.css";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer";

function HomePage({ noOfItems, setNoOfItems }) {
  return (
    <div>
      <Navbar noOfItems={noOfItems} setNoOfItems={setNoOfItems} />
      <Home />
      <Footer />
    </div>
  );
}

export default HomePage;
