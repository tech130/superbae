"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';
import Image from 'next/image';
import { useCurrency } from '@/context/CurrencyContext';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currencyOpen, setCurrencyOpen] = useState(false);
    const [search, setSearch] = useState('');
    const { currency: selectedCurrency, setCurrency: setSelectedCurrency, currencies, isLoading } = useCurrency();
    const currencyRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const menuToggleRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Close dropdown and mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Close currency dropdown if click is outside of any currency dropdown
            if (!target.closest('.currency-dropdown')) {
                setCurrencyOpen(false);
                setSearch('');
            }

            // Close mobile menu if click is outside of the mobile menu and its toggle button
            if (isMenuOpen &&
                mobileMenuRef.current && !mobileMenuRef.current.contains(target) &&
                menuToggleRef.current && !menuToggleRef.current.contains(target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-focus search on open
    useEffect(() => {
        if (currencyOpen && searchRef.current) {
            searchRef.current.focus();
        }
    }, [currencyOpen]);

    // Filter currencies by search
    const filteredCurrencies = currencies.filter((c) => {
        const q = search.toLowerCase();
        return (
            c.countryName.toLowerCase().includes(q) ||
            c.code.toLowerCase().includes(q) ||
            c.name.toLowerCase().includes(q)
        );
    });

    return (
        <nav className="navigation">
            <div className="nav_layout-2">
                {/* Logo / Brand */}
                <Link href="/" aria-current="page" className="nav_home w-inline-block" onClick={(e) => {
                    if (window.location.pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }}>
                    <div className="nav_logo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src="/logo.svg"
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
                            <Link href="/" onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }} className="navigation_linkmain">App</Link>
                            <Link href="https://www.baehiveclub.com/" className="navigation_link">Club</Link>
                            <Link href="https://www.superbae.shop/" className="navigation_link">Shop</Link>
                        </div>

                        {/* Currency Dropdown */}
                        <div className="currency-dropdown" ref={currencyRef}>
                            <button
                                className="currency-dropdown__trigger"
                                onClick={() => {
                                    setCurrencyOpen((prev) => !prev);
                                    setSearch('');
                                }}
                                aria-expanded={currencyOpen}
                                aria-haspopup="listbox"
                                type="button"
                            >
                                <img
                                    src={`https://flagcdn.com/w40/${selectedCurrency.countryCode}.png`}
                                    alt={selectedCurrency.countryName}
                                    className="currency-dropdown__flag"
                                    width={20}
                                    height={14}
                                />
                                <span className="currency-dropdown__label">
                                    {selectedCurrency.symbol} {selectedCurrency.code}
                                </span>
                                <svg
                                    className={`currency-dropdown__chevron ${currencyOpen ? 'currency-dropdown__chevron--open' : ''}`}
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#111"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            {currencyOpen && (
                                <div className="currency-dropdown__menu" role="listbox">
                                    {/* Search input */}
                                    <div className="currency-dropdown__search-wrapper">
                                        <svg className="currency-dropdown__search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="m21 21-4.35-4.35" />
                                        </svg>
                                        <input
                                            ref={searchRef}
                                            type="text"
                                            className="currency-dropdown__search"
                                            placeholder="Search country or currency..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    </div>

                                    {/* Currency list */}
                                    <ul className="currency-dropdown__list">
                                        {isLoading ? (
                                            <li className="currency-dropdown__empty">Loading countries...</li>
                                        ) : filteredCurrencies.length === 0 ? (
                                            <li className="currency-dropdown__empty">No results found</li>
                                        ) : (
                                            filteredCurrencies.map((c) => (
                                                <li
                                                    key={`${c.countryCode}-${c.code}`}
                                                    className={`currency-dropdown__item ${c.code === selectedCurrency.code && c.countryCode === selectedCurrency.countryCode ? 'currency-dropdown__item--active' : ''}`}
                                                    role="option"
                                                    aria-selected={c.code === selectedCurrency.code && c.countryCode === selectedCurrency.countryCode}
                                                    onClick={() => {
                                                        setSelectedCurrency(c);
                                                        setCurrencyOpen(false);
                                                        setSearch('');
                                                    }}
                                                >
                                                    <img
                                                        src={`https://flagcdn.com/w40/${c.countryCode}.png`}
                                                        alt={c.countryName}
                                                        className="currency-dropdown__item-flag"
                                                        width={22}
                                                        height={16}
                                                        loading="lazy"
                                                    />
                                                    <div className="currency-dropdown__item-info">
                                                        <span className="currency-dropdown__item-country">{c.countryName}</span>
                                                        <span className="currency-dropdown__item-code">{c.symbol} {c.code}</span>
                                                    </div>
                                                </li>
                                            ))
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile menu toggle */}
                <div className="nav_right mobile-menu-toggle-container" ref={menuToggleRef}>
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
                <div className="nav_main-wrapper mobile-open" ref={mobileMenuRef}
                    style={{
                        height: 'auto',
                        padding: '20px',
                        backgroundColor: '#fff9',
                        backdropFilter: 'blur(.75rem)',
                        WebkitBackdropFilter: 'blur(.75rem)',
                        position: 'absolute',
                        top: 'calc(80% + 10px)',
                        overflowY: 'scroll',
                        scrollbarWidth: 'thin',
                        left: 0,
                        right: 0,
                        borderRadius: '1rem',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        zIndex: 100,
                    }}>
                    <div className="nav_main" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: 0 }}>
                        <div className="nav_main-inner" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <Link href="/" className="navigation_linkmain" onClick={toggleMenu} style={{ fontSize: '18px', fontWeight: 500 }}>App</Link>
                            <Link href="https://www.baehiveclub.com/" className="navigation_link" onClick={toggleMenu} style={{ fontSize: '18px', fontWeight: 500 }}>Club</Link>
                            <Link href="https://www.superbae.shop/" className="navigation_link" onClick={toggleMenu} style={{ fontSize: '18px', fontWeight: 500 }}>Shop</Link>
                            {/* Currency Dropdown */}
                            <div className="currency-dropdown" ref={currencyRef}>
                                <button
                                    className="currency-dropdown__trigger"
                                    onClick={() => {
                                        setCurrencyOpen((prev) => !prev);
                                        setSearch('');
                                    }}
                                    aria-expanded={currencyOpen}
                                    aria-haspopup="listbox"
                                    type="button"
                                >
                                    <img
                                        src={`https://flagcdn.com/w40/${selectedCurrency.countryCode}.png`}
                                        alt={selectedCurrency.countryName}
                                        className="currency-dropdown__flag"
                                        width={20}
                                        height={14}
                                    />
                                    <span className="currency-dropdown__label">
                                        {selectedCurrency.symbol} {selectedCurrency.code}
                                    </span>
                                    <svg
                                        className={`currency-dropdown__chevron ${currencyOpen ? 'currency-dropdown__chevron--open' : ''}`}
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#111"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                {currencyOpen && (
                                    <div className="currency-dropdown__menu" style={{ right: '15px' }} role="listbox">
                                        {/* Search input */}
                                        <div className="currency-dropdown__search-wrapper">
                                            <svg className="currency-dropdown__search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="11" cy="11" r="8" />
                                                <path d="m21 21-4.35-4.35" />
                                            </svg>
                                            <input
                                                ref={searchRef}
                                                type="text"
                                                className="currency-dropdown__search"
                                                placeholder="Search country or currency..."
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        </div>

                                        {/* Currency list */}
                                        <ul className="currency-dropdown__list">
                                            {isLoading ? (
                                                <li className="currency-dropdown__empty">Loading countries...</li>
                                            ) : filteredCurrencies.length === 0 ? (
                                                <li className="currency-dropdown__empty">No results found</li>
                                            ) : (
                                                filteredCurrencies.map((c) => (
                                                    <li
                                                        key={`${c.countryCode}-${c.code}`}
                                                        className={`currency-dropdown__item ${c.code === selectedCurrency.code && c.countryCode === selectedCurrency.countryCode ? 'currency-dropdown__item--active' : ''}`}
                                                        role="option"
                                                        aria-selected={c.code === selectedCurrency.code && c.countryCode === selectedCurrency.countryCode}
                                                        onClick={() => {
                                                            setSelectedCurrency(c);
                                                            setCurrencyOpen(false);
                                                            setSearch('');
                                                        }}
                                                    >
                                                        <img
                                                            src={`https://flagcdn.com/w40/${c.countryCode}.png`}
                                                            alt={c.countryName}
                                                            className="currency-dropdown__item-flag"
                                                            width={22}
                                                            height={16}
                                                            loading="lazy"
                                                        />
                                                        <div className="currency-dropdown__item-info">
                                                            <span className="currency-dropdown__item-country">{c.countryName}</span>
                                                            <span className="currency-dropdown__item-code">{c.symbol} {c.code}</span>
                                                        </div>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;