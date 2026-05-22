import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/banking_image3.png";
import travel_2 from "../images/banking_image2.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 text-color">
            <h1>Modern Banking Built for Everyday Financial Confidence</h1>
            <p>
  TAJ Banking provides a secure and convenient digital banking experience for customers
  who want fast access to their accounts, smooth transactions, and reliable financial
  services from anywhere.
</p>
            <p>
  Customers can manage account information, view banking records, deposit funds,
  withdraw money, and complete transfers through a simple and responsive online platform.
</p>
<p>
  Behind the interface, the system is designed with cloud-ready banking principles in mind:
  secure access, reliable infrastructure, transaction visibility, and scalable service delivery.
</p>
            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={travel_2}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src={travel_1}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
          <div className="col-md-8 text-color">
            <h1 className="ms-5">Experience Effortless Financial Management</h1>
            <p className="ms-5">
              Discover a new level of financial control through our intuitive
              Online Banking System. Seamlessly manage transactions, deposits,
              and withdrawals with a user-friendly interface designed to
              simplify your banking experience. Whether you're transferring
              funds, depositing savings, or making withdrawals, our platform
              ensures security and convenience at every step.
            </p>
            <p className="ms-5">
              Empower yourself with effortless financial management and enjoy
              the freedom to take charge of your accounts from the comfort of
              your own device. Join us in revolutionizing the way you interact
              with your finances, as we pave the way for a more streamlined and
              secure banking future.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text ms-5">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
