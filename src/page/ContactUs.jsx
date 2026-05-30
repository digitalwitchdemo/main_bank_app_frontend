const ContactUs = () => {
  return (
    <div className="contact-page-bg">
      <div className="container text-color">
        <div className="mb-5">
          <h1 className="mb-3">Contact TAJ Banking</h1>
          <p className="lead">
            Need to reach us? Our support team is available to help with feedback,
            complaints, account enquiries, transaction issues, and digital
            banking support.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 p-4">
              <h4 className="mb-3">Pay Us a Visit</h4>
              <p className="mb-1">
                <strong>Head Office</strong>
              </p>
              <p className="mb-0">
                Central Business District,
                <br />
                Abuja, Nigeria.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 p-4">
              <h4 className="mb-3">Call or Chat With Us</h4>
              <p className="mb-1">
                <strong>Customer Care</strong>
              </p>
              <p className="mb-1">+234 000 000 0000</p>
              <p className="mb-1">
                <strong>WhatsApp</strong>
              </p>
              <p className="mb-0">+234 000 000 0000</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 p-4">
              <h4 className="mb-3">Send Us an Email</h4>
              <p className="mb-1">
                <strong>Email Address</strong>
              </p>
              <p className="mb-0">support@tajbanking.com</p>
            </div>
          </div>
        </div>

        <div className="card shadow-sm border-0 p-4 mt-5">
          <h4 className="mb-3">How We Can Help</h4>

          <div className="row">
            <div className="col-md-6">
              <p>✓ Account access support</p>
              <p>✓ Transaction enquiries</p>
              <p>✓ Deposit and withdrawal assistance</p>
            </div>

            <div className="col-md-6">
              <p>✓ Digital banking guidance</p>
              <p>✓ Security and fraud reporting</p>
              <p>✓ General customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;