import Navbar from "../Components/Navbar/Navbar";

function ErrorPage({ noOfItems, setNoOfItems }) {
  return (
    <div>
      <Navbar noOfItems={noOfItems} setNoOfItems={setNoOfItems} />
      <div>Oops! The Page does not exist!</div>
    </div>
  );
}

export default ErrorPage;
