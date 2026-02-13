import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          <div className="col-md-3 col-6 mb-4">
            <h5 className="text-uppercase pb-2">About Company</h5>
            <p>
              We are a leading company in providing high-quality products and services to our customers. Our mission is to deliver excellence and innovation in everything we do.
            </p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h5 className="text-uppercase pb-2">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#help" className="text-light ">Dashboard</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
              <li><a href="#faq" className="text-light">FAQ</a></li>
              <li><a href="#status" className="text-light">System Status</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h5 className="text-uppercase pb-2">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#docs" className="text-light">Docs</a></li>
              <li><a href="#api" className="text-light">API</a></li>
              <li><a href="#guides" className="text-light">Guides</a></li>
              <li><a href="#community" className="text-light">Community</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h5 className="text-uppercase pb-2">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#twitter" className="text-light">Twitter</a></li>
              <li><a href="#instagram" className="text-light">Instagram</a></li>
              <li><a href="#linkedin" className="text-light">LinkedIn</a></li>
              <li><a href="#youtube" className="text-light">YouTube</a></li>
            </ul>
          </div>

        </div>

        <div className="text-center border-top border-secondary pt-3 mt-3">
          <small>© {new Date().getFullYear()} Your Company. All rights reserved.</small>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer
