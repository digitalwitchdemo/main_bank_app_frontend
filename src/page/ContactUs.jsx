const ContactUs = () => {
  return (
    <div className="container my-5 text-color">
      <div className="row align-items-start">
        <div className="col-md-7">
          <h1 className="mb-4">Contact TAJ Banking</h1>

          <p>
            We are committed to making digital banking simple, secure, and
            accessible. Whether you need support with your account, transactions,
            digital banking access, or general enquiries, our team is ready to
            assist you.
          </p>

          <p>
            For urgent banking issues, customers are encouraged to contact support
            immediately through the available service channels.
          </p>

          <div className="mt-4">
            <h4>Customer Support</h4>
            <p className="mb-1">Email: support@tajbanking.com</p>
            <p className="mb-1">Phone: +234 000 000 0000</p>
            <p className="mb-1">Service Hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="col-md-5 mt-4 mt-md-0">
          <div className="card shadow-sm border-0 p-4">
            <h4 className="mb-3">How We Can Help</h4>

            <ul className="list-unstyled">
              <li className="mb-3">✓ Account access support</li>
              <li className="mb-3">✓ Transaction enquiries</li>
              <li className="mb-3">✓ Deposit and withdrawal assistance</li>
              <li className="mb-3">✓ Digital banking guidance</li>
              <li className="mb-3">✓ Security and fraud reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;