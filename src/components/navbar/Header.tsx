"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import './Header.css';
import Image from 'next/image';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <nav className="navigation">
            <div className="nav_layout-2">
                {/* Logo / Brand */}
                <Link href="/" aria-current="page" className="nav_home w-inline-block">
                    <div className="nav_logo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src="/logo-1.png" // your logo path
                                alt="SnBsuper Logo"
                                width={100}
                                height={50}
                                priority
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                    <div className="u-sr-only">SnBsuper Home</div>
                </Link>

                {/* Desktop navigation */}
                <div className="nav_main-wrapper">
                    <div className="nav_main">
                        <div className="nav_main-inner">
                            <Link href="/app" className="navigation_link">App</Link>
                            <Link href="/club" className="navigation_link">Club</Link>
                            <Link href="/shop" className="navigation_link">Shop</Link>
                        </div>

                        {/* Call-to-Action button */}
                        <Link href="/get-started" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    padding: "8px 12px",
                                    borderRadius: "999px",
                                }}
                            >
                                <Image
                                    src="/india-flag.png"
                                    alt="India"
                                    width={20}
                                    height={20}
                                />
                                <span style={{ fontWeight: 500, color: "#111", fontSize: "14px" }}>₹ INR</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Mobile menu toggle */}
                <div className="nav_right mobile-menu-toggle-container">
                    <div
                        className="nav_menu-2"
                        onClick={toggleMenu}
                        role="button"
                        aria-label="Toggle menu"
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                        }}
                    >
                        <div className="nav_menu-line cc-top" style={{ position: 'absolute', height: '2px', backgroundColor: '#111', transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(45deg)' : 'translateY(-6px)', width: isMenuOpen ? '24px' : "24px" }}></div>
                        <div className="nav_menu-line cc-middle" style={{ position: 'absolute', width: '24px', height: '2px', backgroundColor: '#111', transition: 'all 0.3s ease', opacity: isMenuOpen ? 0 : 1 }}></div>
                        <div className="nav_menu-line cc-bottom" style={{ position: 'absolute', width: '24px', height: '2px', backgroundColor: '#111', transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(-45deg)' : 'translateY(6px)' }}></div>
                    </div>
                </div>
            </div>

            {/* Mobile menu (collapsible) */}
            {isMenuOpen && (
                <div className="nav_main-wrapper mobile-open"
                    style={{
                        height: 'auto',
                        padding: '20px',
                        backgroundColor: '#fff9',
                        backdropFilter: 'blur(.75rem)',
                        WebkitBackdropFilter: 'blur(.75rem)',
                        position: 'absolute',
                        top: 'calc(80% + 10px)',
                        left: 0,
                        right: 0,
                        borderRadius: '1rem',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        zIndex: 100,
                    }}>
                    <div className="nav_main" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: 0 }}>
                        <div className="nav_main-inner" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <Link href="/app" className="navigation_link" onClick={toggleMenu} style={{ fontSize: '18px', fontWeight: 500 }}>App</Link>
                            <Link href="/club" className="navigation_link" onClick={toggleMenu} style={{ fontSize: '18px', fontWeight: 500 }}>Club</Link>
                            <Link href="/shop" className="navigation_link" onClick={toggleMenu} style={{ fontSize: '18px', fontWeight: 500 }}>Shop</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;