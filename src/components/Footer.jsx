export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        {/* Left logo section */}
        <div className="footer-logo">
          <img src="https://tse3.mm.bing.net/th/id/OIP.89X2cEubWFBNdD-Zo1I1GAHaFw?pid=Api&P=0&h=180" alt="Logo" />
          <p className="copyright">
            © Copyright 2023. All Rights Reserved by DevUI.
          </p>
        </div>

        {/* Right links */}
        <div className="footer-links">
          <div>
            <h4>COMPANY</h4>
            <p>Features</p>
            <p>Pricing</p>
            <p>Affiliate Program</p>
            <p>Press Kit</p>
          </div>

          <div>
            <h4>SUPPORT</h4>
            <p>Account</p>
            <p>Help</p>
            <p>Contact Us</p>
            <p>Customer Support</p>
          </div>

          <div>
            <h4>LEGALS</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Licensing</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
