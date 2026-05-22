import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/modern_banking_illustration1.png";
import travel_2 from "../images/modern_banking_illustration2.png";

const HomePage = () => {
  return (
    <div>
      <div className="container-fluid mb-2">
        <Carousel />
      </div>

      <div className="container mt-5 home-modern-section">
        <div className="row align-items-center g-5">
          <div className="col-md-8 text-color">
            <span className="home-feature-pill">SMART DIGITAL BANKING</span>

            <h1>Banking Services Designed for Modern Customers</h1>

            <p>
              TAJ Banking provides a secure and convenient digital banking
              experience for customers who want fast access to their accounts,
              smooth transactions, and reliable financial services from anywhere.
            </p>

            <p>
              Customers can manage account information, view banking records,
              deposit funds, withdraw money, and complete transfers through a
              simple and responsive online platform.
            </p>

            <p>
              Behind the interface, the system is designed with cloud-ready
              banking principles in mind: secure access, reliable infrastructure,
              transaction visibility, and scalable service delivery.
            </p>

            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>

          <div className="col-md-4 d-flex align-items-center">
            <img
              src={travel_2}
              className="img-fluid"
              alt="Modern digital banking dashboard"
            />
          </div>
        </div>
      </div>

      <div className="container mt-5 home-modern-section">
        <div className="row align-items-center g-5">
          <div className="col-md-5">
            <img
              src={travel_1}
              className="img-fluid"
              alt="Secure digital banking interface"
            />
          </div>

          <div className="col-md-7 text-color">
            <span className="home-feature-pill">EFFORTLESS BANKING</span>

            <h1>Experience Effortless Financial Management</h1>

            <p>
              Manage your banking activities with a simple and secure digital
              experience designed for everyday customers.
            </p>

            <p>
              From transfers and deposits to withdrawals and transaction
              tracking, TAJ Banking helps customers stay in control of their
              financial activities from one convenient platform.
            </p>

            <p>
              The system is built to support speed, visibility, and ease of use,
              making digital banking more reliable and accessible.
            </p>

            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;