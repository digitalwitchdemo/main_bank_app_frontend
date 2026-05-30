const AboutUs = () => {
  return (
    <div className="contact-page-bg">
      <div className="container text-color">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="mb-4">About TAJ Banking</h1>

            <p>
              TAJ Banking is a modern digital banking platform designed to make
              everyday financial services simple, secure, and accessible. The
              system allows customers to manage their accounts, perform
              transactions, and access essential banking services through a clean
              and reliable online experience.
            </p>

            <p>
              Built with real-world banking needs in mind, the platform focuses
              on account management, transaction visibility, secure access, and
              smooth customer operations. It brings together the core features
              expected in a digital banking environment while keeping the user
              experience simple and efficient.
            </p>

            <p>
              Behind the frontend, the project is designed to align with a
              cloud-ready architecture using AWS concepts such as secure
              networking, scalable infrastructure, monitoring, and reliable
              application deployment.
            </p>
          </div>

          <div className="col-md-4 mt-4 mt-md-0">
            <div className="card shadow-sm border-0 p-4">
              <h4 className="mb-3">Our Focus</h4>

              <ul className="list-unstyled">
                <li className="mb-2">✓ Secure digital banking</li>
                <li className="mb-2">✓ Smooth account management</li>
                <li className="mb-2">✓ Reliable transaction services</li>
                <li className="mb-2">✓ Cloud-ready infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;