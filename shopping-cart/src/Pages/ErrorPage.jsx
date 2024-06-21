import Navbar from "../Components/Navbar/Navbar";
import Error from "../Components/Error/Error";

function ErrorPage({ noOfItems, setNoOfItems }) {
  return (
    <div>
      <Navbar noOfItems={noOfItems} setNoOfItems={setNoOfItems} />
      <Error />
    </div>
  );
}

export default ErrorPage;
