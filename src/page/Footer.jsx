import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="taj-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h3>TAJ Banking</h3>
            <p>
              A modern digital banking platform built to provide secure account
              access, seamless transactions, and reliable financial services for
              everyday customers.
            </p>
          </div>

          <div className="col-md-2">
            <h5>Company</h5>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/user/login">Login</Link>
          </div>

          <div className="col-md-2">
            <h5>Services</h5>
            <span>Account Management</span>
            <span>Fund Transfers</span>
            <span>Transaction Records</span>
          </div>

          <div className="col-md-2">
            <h5>Security</h5>
            <span>Secure Access</span>
            <span>Fraud Awareness</span>
            <span>Data Protection</span>
          </div>

          <div className="col-md-2">
            <h5>Support</h5>
            <span>support@tajbanking.com</span>
            <span>+234 000 000 0000</span>
            <span>Abuja, Nigeria</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 TAJ Banking. Built for POD 6 banking application project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;