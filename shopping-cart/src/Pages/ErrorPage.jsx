import Navbar from "../Components/Navbar/Navbar";
import Error from "../Components/Error/Error";
import Footer from "../Components/Footer/Footer";

function ErrorPage({ noOfItems, setNoOfItems }) {
  return (
    <div>
      <Navbar noOfItems={noOfItems} setNoOfItems={setNoOfItems} />
      <Error />
      <Footer />
    </div>
  );
}

export default ErrorPage;
