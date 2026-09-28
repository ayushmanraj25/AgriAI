import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const year = new Date().getFullYear()

  return (
    <footer className="app-footer pt-5 pb-3">
      <div className="container mt-4">
        <div className="row">
          {/* 1. Brand & About Team */}
          <div className="col-lg-4 col-md-6 mb-4 pr-lg-5">
            <div className="d-flex align-items-center mb-3">
              <img src="/images/logo.png" alt="logo" style={{ height: 40, borderRadius: 6 }} className="mr-3" />
              <h5 className="mb-0 footer-brand-title">Harvestify</h5>
            </div>
            <p className="text-muted mb-4">
              Empowering farmers with AI-driven insights for crop recommendation, fertilizer suggestions, disease detection, and smart irrigation.
            </p>
            <div className="d-flex align-items-center">
              <div style={{ width: 4, height: 40, backgroundColor: 'var(--theme-green)', marginRight: 15, borderRadius: 2 }} />
              <div>
                <small className="text-uppercase" style={{ color: 'var(--theme-green)', fontWeight: 600, fontSize: '0.75rem', letterSpacing: 1 }}>
                  Developed By
                </small>
                <br />
                <span className="text-white" style={{ fontWeight: 500 }}>Jayram</span>
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <Link to="/" className="footer-link"><i className="fa fa-angle-right mr-2" />Home</Link>
            <Link to="/crop-recommend" className="footer-link"><i className="fa fa-angle-right mr-2" />Crop Match</Link>
            <Link to="/fertilizer" className="footer-link"><i className="fa fa-angle-right mr-2" />Fertilizers</Link>
            <Link to="/disease-predict" className="footer-link"><i className="fa fa-angle-right mr-2" />Disease Check</Link>
            <Link to="/mandi" className="footer-link"><i className="fa fa-angle-right mr-2" />Mandi Price</Link>
          </div>

          {/* 3. Legal & Support */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">Support</h5>
            <a href="#" className="footer-link"><i className="fa fa-angle-right mr-2" />Privacy Policy</a>
            <a href="#" className="footer-link"><i className="fa fa-angle-right mr-2" />Terms of Service</a>
            <a href="#" className="footer-link"><i className="fa fa-angle-right mr-2" />Help Center</a>
            <a
              href="#"
              className="footer-link"
              onClick={(e) => { e.preventDefault(); setFeedbackOpen(true) }}
            >
              <i className="fa fa-angle-right mr-2" />Send Feedback
            </a>
          </div>

          {/* 4 & 5. Contact & Social */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">Get In Touch</h5>
            <div className="footer-contact-item">
              <i className="fa fa-envelope" />
              <span>ayushmanraj430@gmail.com</span>
            </div>
            <div className="footer-contact-item mb-4">
              <i className="fa fa-phone" />
              <span>+91 7485856647</span>
            </div>
            <h5 className="footer-title mt-4 mb-3" style={{ fontSize: '0.9rem' }}>Follow Us</h5>
            <div className="d-flex">
              <a href="https://github.com/ayushmanraj25/Harvestify1" target="_blank" rel="noreferrer" className="social-icon" title="GitHub"><i className="fa fa-github" /></a>
              <a href="https://www.linkedin.com/in/ayushman-raj-7446b12b7/" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn"><i className="fa fa-linkedin" /></a>
              <a href="https://www.instagram.com/ayushman.one8" target="_blank" rel="noreferrer" className="social-icon" title="Instagram"><i className="fa fa-instagram" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom mt-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <small style={{ color: '#7b8b9a' }}>&copy; {year} Harvestify. All rights reserved.</small>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <small style={{ color: '#7b8b9a' }}>Built for smarter farming.</small>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {feedbackOpen && (
        <div className="custom-modal" onClick={() => setFeedbackOpen(false)}>
          <div className="feedback-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="feedback-modal-header">
              <h5 className="modal-title font-weight-bold">We&apos;d love to hear from you!</h5>
              <button
                type="button"
                className="close text-white shadow-none border-0 bg-transparent"
                aria-label="Close"
                style={{ opacity: 0.8, outline: 'none' }}
                onClick={() => setFeedbackOpen(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-4">
              <form action="https://formsubmit.co/dallaa.one8@gmail.com" method="POST" id="feedbackForm">
                <input type="hidden" name="_subject" value="New Feedback from Harvestify User" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <div className="form-group mb-3">
                  <label htmlFor="name" className="font-weight-bold" style={{ fontSize: '0.9rem', color: '#555' }}>Your Name</label>
                  <input type="text" name="name" className="form-control" style={{ borderRadius: 8, background: '#f8f9fa' }} required />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="font-weight-bold" style={{ fontSize: '0.9rem', color: '#555' }}>Email Address</label>
                  <input type="email" name="email" className="form-control" style={{ borderRadius: 8, background: '#f8f9fa' }} required />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="message" className="font-weight-bold" style={{ fontSize: '0.9rem', color: '#555' }}>Your Message / Doubt</label>
                  <textarea name="message" className="form-control" rows="4" style={{ borderRadius: 8, background: '#f8f9fa', resize: 'none' }} placeholder="How can we help?" required />
                </div>
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                <button type="submit" className="btn btn-success btn-block" style={{ borderRadius: 8, fontWeight: 600, padding: 10 }}>
                  Send Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
