"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer id="footer">
            {/* ─── Newsletter / CTA Strip ─── */}
            <div className="footer-cta">
                <p className="footer-cta__text">
                    Empowering your workflow with clarity and innovation
                </p>

                <form className="footer-cta__form" onSubmit={(e) => e.preventDefault()}>
                    <div className="footer-cta__input-wrapper">
                        {/* Mail icon */}
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="footer-cta__input"
                            aria-label="Email address"
                        />
                    </div>
                    <button type="submit" className="footer-cta__subscribe-btn">
                        Subscribe
                    </button>
                </form>
            </div>

            {/* ─── Main Footer Body ─── */}
            <div className="footer-main">
                {/* Brand column */}
                <div className="footer-brand">
                    <Image
                        src="/logo-1.png"
                        alt="SuperBae Logo"
                        width={120}
                        height={60}
                        className="footer-brand__logo"
                        style={{ objectFit: 'contain' }}
                    />
                    <p className="footer-brand__description">
                        Designed to help you work smarter with seamless collaboration and intuitive tools.
                    </p>
                </div>

                {/* Info column */}
                <div className="footer-info">
                    {/* Navigation links */}
                    <nav className="footer-nav" aria-label="Footer navigation">
                        <Link href="/" className="footer-nav__link">Home</Link>
                        <Link href="/about" className="footer-nav__link">About Us</Link>
                        <Link href="/solutions" className="footer-nav__link">Solutions</Link>
                        <Link href="/resources" className="footer-nav__link">Resources</Link>
                        <Link href="/testimonials" className="footer-nav__link">Testimonials</Link>
                    </nav>

                    {/* Contact info */}
                    <div className="footer-contact">
                        <div className="footer-contact__row">
                            <span className="footer-contact__item">hello@superbae.com</span>
                            <span className="footer-contact__item">+91 98765 43210</span>
                        </div>
                        <span className="footer-contact__address">
                            123 Elm Street, Apt 4B Springfield, IL 62701
                        </span>
                    </div>

                    {/* Legal links */}
                    <div className="footer-legal">
                        <Link href="/privacy" className="footer-legal__link">Privacy Policy</Link>
                        <Link href="/terms" className="footer-legal__link">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>

            {/* ─── Bottom Bar ─── */}
            <div className="footer-bottom">
                <p className="footer-bottom__copyright">
                    © 2026 SuperBae. All rights reserved.
                </p>

                <div className="footer-bottom__socials">
                    {/* X (Twitter) */}
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer-bottom__social-link" aria-label="X (Twitter)">
                        <svg viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-bottom__social-link" aria-label="Instagram">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-bottom__social-link" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>

                    {/* Dribbble */}
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="footer-bottom__social-link" aria-label="Dribbble">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-9.36c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702A10.006 10.006 0 0012 1.968c-.82 0-1.628.1-2.4.084zm10.335 3.483c-.218.29-1.89 2.478-5.64 4.023.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.4-6.37z" />
                        </svg>
                    </a>

                    {/* Behance */}
                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="footer-bottom__social-link" aria-label="Behance">
                        <svg viewBox="0 0 24 24">
                            <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.16-1.27.25-1.95.25H0v-15.2h6.938v.04zm-.71 6.12c.58 0 1.06-.15 1.425-.45.37-.3.554-.74.554-1.34 0-.344-.07-.625-.18-.848-.12-.22-.28-.39-.48-.52-.2-.12-.43-.21-.69-.26-.26-.05-.54-.074-.84-.074H3.375v3.5h2.853v-.01zm.19 6.47c.32 0 .63-.03.93-.09.3-.06.56-.17.79-.32.23-.15.41-.36.54-.63.13-.27.2-.61.2-1.02 0-.81-.23-1.39-.68-1.74-.45-.35-1.06-.53-1.8-.53H3.375v4.33h3.043zm10.498 1.26c.6.56 1.44.84 2.55.84.79 0 1.47-.2 2.04-.59.57-.39.91-.82 1.04-1.28h3.45c-.55 1.72-1.38 2.95-2.5 3.7-1.12.75-2.47 1.13-4.05 1.13-1.1 0-2.09-.18-2.97-.55-.88-.37-1.63-.88-2.25-1.54-.62-.66-1.1-1.44-1.43-2.36-.33-.92-.5-1.93-.5-3.02 0-1.05.17-2.03.5-2.94.33-.91.8-1.7 1.41-2.37.6-.67 1.34-1.19 2.2-1.57.86-.38 1.82-.57 2.88-.57 1.18 0 2.2.22 3.07.66.87.44 1.58 1.04 2.14 1.8.56.76.96 1.64 1.22 2.63.25 1 .34 2.07.25 3.2H16.24c.05 1.14.47 2.03 1.07 2.59zm4.47-7.12c-.44-.49-1.17-.73-2.02-.73-.56 0-1.03.09-1.4.28-.37.19-.66.43-.88.72-.21.29-.36.6-.44.93-.08.33-.13.63-.15.93h5.98c-.17-1-.56-1.65-1.1-2.14zM15.2 3.88h5.56v1.56H15.2V3.88z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
