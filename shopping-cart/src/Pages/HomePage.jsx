import "../../src/assets/Styles/Style.css";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";

function HomePage({ noOfItems, setNoOfItems }) {
  return (
    <div>
      <Navbar noOfItems={noOfItems} setNoOfItems={setNoOfItems} />
      <Home />
    </div>
  );
}

export default HomePage;
