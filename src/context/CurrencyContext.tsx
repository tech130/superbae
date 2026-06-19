"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Currency {
    code: string;
    symbol: string;
    name: string;
    countryCode: string;
    countryName: string;
}

// Default currency
const DEFAULT_CURRENCY: Currency = {
    code: 'INR',
    symbol: '₹',
    name: 'Indian Rupee',
    countryCode: 'in',
    countryName: 'India',
};

// Static list of all countries with currencies (no API needed)
const ALL_COUNTRIES: Currency[] = [
    { code: 'AFN', symbol: '؋', name: 'Afghan Afghani', countryCode: 'af', countryName: 'Afghanistan' },
    { code: 'ALL', symbol: 'L', name: 'Albanian Lek', countryCode: 'al', countryName: 'Albania' },
    { code: 'DZD', symbol: 'د.ج', name: 'Algerian Dinar', countryCode: 'dz', countryName: 'Algeria' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'ad', countryName: 'Andorra' },
    { code: 'AOA', symbol: 'Kz', name: 'Angolan Kwanza', countryCode: 'ao', countryName: 'Angola' },
    { code: 'XCD', symbol: '$', name: 'East Caribbean Dollar', countryCode: 'ag', countryName: 'Antigua & Barbuda' },
    { code: 'ARS', symbol: '$', name: 'Argentine Peso', countryCode: 'ar', countryName: 'Argentina' },
    { code: 'AMD', symbol: '֏', name: 'Armenian Dram', countryCode: 'am', countryName: 'Armenia' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', countryCode: 'au', countryName: 'Australia' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'at', countryName: 'Austria' },
    { code: 'AZN', symbol: '₼', name: 'Azerbaijani Manat', countryCode: 'az', countryName: 'Azerbaijan' },
    { code: 'BSD', symbol: '$', name: 'Bahamian Dollar', countryCode: 'bs', countryName: 'Bahamas' },
    { code: 'BHD', symbol: '.د.ب', name: 'Bahraini Dinar', countryCode: 'bh', countryName: 'Bahrain' },
    { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka', countryCode: 'bd', countryName: 'Bangladesh' },
    { code: 'BBD', symbol: '$', name: 'Barbadian Dollar', countryCode: 'bb', countryName: 'Barbados' },
    { code: 'BYN', symbol: 'Br', name: 'Belarusian Ruble', countryCode: 'by', countryName: 'Belarus' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'be', countryName: 'Belgium' },
    { code: 'BZD', symbol: '$', name: 'Belize Dollar', countryCode: 'bz', countryName: 'Belize' },
    { code: 'XOF', symbol: 'CFA', name: 'West African CFA Franc', countryCode: 'bj', countryName: 'Benin' },
    { code: 'BTN', symbol: 'Nu.', name: 'Bhutanese Ngultrum', countryCode: 'bt', countryName: 'Bhutan' },
    { code: 'BOB', symbol: 'Bs.', name: 'Bolivian Boliviano', countryCode: 'bo', countryName: 'Bolivia' },
    { code: 'BAM', symbol: 'KM', name: 'Bosnia Mark', countryCode: 'ba', countryName: 'Bosnia & Herzegovina' },
    { code: 'BWP', symbol: 'P', name: 'Botswanan Pula', countryCode: 'bw', countryName: 'Botswana' },
    { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', countryCode: 'br', countryName: 'Brazil' },
    { code: 'BND', symbol: '$', name: 'Brunei Dollar', countryCode: 'bn', countryName: 'Brunei' },
    { code: 'BGN', symbol: 'лв', name: 'Bulgarian Lev', countryCode: 'bg', countryName: 'Bulgaria' },
    { code: 'XOF', symbol: 'CFA', name: 'West African CFA Franc', countryCode: 'bf', countryName: 'Burkina Faso' },
    { code: 'BIF', symbol: 'FBu', name: 'Burundian Franc', countryCode: 'bi', countryName: 'Burundi' },
    { code: 'KHR', symbol: '៛', name: 'Cambodian Riel', countryCode: 'kh', countryName: 'Cambodia' },
    { code: 'XAF', symbol: 'FCFA', name: 'Central African CFA Franc', countryCode: 'cm', countryName: 'Cameroon' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', countryCode: 'ca', countryName: 'Canada' },
    { code: 'CVE', symbol: '$', name: 'Cape Verdean Escudo', countryCode: 'cv', countryName: 'Cape Verde' },
    { code: 'XAF', symbol: 'FCFA', name: 'Central African CFA Franc', countryCode: 'cf', countryName: 'Central African Republic' },
    { code: 'XAF', symbol: 'FCFA', name: 'Central African CFA Franc', countryCode: 'td', countryName: 'Chad' },
    { code: 'CLP', symbol: '$', name: 'Chilean Peso', countryCode: 'cl', countryName: 'Chile' },
    { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', countryCode: 'cn', countryName: 'China' },
    { code: 'COP', symbol: '$', name: 'Colombian Peso', countryCode: 'co', countryName: 'Colombia' },
    { code: 'KMF', symbol: 'CF', name: 'Comorian Franc', countryCode: 'km', countryName: 'Comoros' },
    { code: 'CDF', symbol: 'FC', name: 'Congolese Franc', countryCode: 'cd', countryName: 'Congo (DRC)' },
    { code: 'XAF', symbol: 'FCFA', name: 'Central African CFA Franc', countryCode: 'cg', countryName: 'Congo (Republic)' },
    { code: 'CRC', symbol: '₡', name: 'Costa Rican Colón', countryCode: 'cr', countryName: 'Costa Rica' },
    { code: 'HRK', symbol: 'kn', name: 'Croatian Kuna', countryCode: 'hr', countryName: 'Croatia' },
    { code: 'CUP', symbol: '$', name: 'Cuban Peso', countryCode: 'cu', countryName: 'Cuba' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'cy', countryName: 'Cyprus' },
    { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna', countryCode: 'cz', countryName: 'Czech Republic' },
    { code: 'DKK', symbol: 'kr', name: 'Danish Krone', countryCode: 'dk', countryName: 'Denmark' },
    { code: 'DJF', symbol: 'Fdj', name: 'Djiboutian Franc', countryCode: 'dj', countryName: 'Djibouti' },
    { code: 'DOP', symbol: 'RD$', name: 'Dominican Peso', countryCode: 'do', countryName: 'Dominican Republic' },
    { code: 'USD', symbol: '$', name: 'US Dollar', countryCode: 'ec', countryName: 'Ecuador' },
    { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound', countryCode: 'eg', countryName: 'Egypt' },
    { code: 'USD', symbol: '$', name: 'US Dollar', countryCode: 'sv', countryName: 'El Salvador' },
    { code: 'XAF', symbol: 'FCFA', name: 'Central African CFA Franc', countryCode: 'gq', countryName: 'Equatorial Guinea' },
    { code: 'ERN', symbol: 'Nfk', name: 'Eritrean Nakfa', countryCode: 'er', countryName: 'Eritrea' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'ee', countryName: 'Estonia' },
    { code: 'SZL', symbol: 'E', name: 'Swazi Lilangeni', countryCode: 'sz', countryName: 'Eswatini' },
    { code: 'ETB', symbol: 'Br', name: 'Ethiopian Birr', countryCode: 'et', countryName: 'Ethiopia' },
    { code: 'FJD', symbol: '$', name: 'Fijian Dollar', countryCode: 'fj', countryName: 'Fiji' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'fi', countryName: 'Finland' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'fr', countryName: 'France' },
    { code: 'XAF', symbol: 'FCFA', name: 'Central African CFA Franc', countryCode: 'ga', countryName: 'Gabon' },
    { code: 'GMD', symbol: 'D', name: 'Gambian Dalasi', countryCode: 'gm', countryName: 'Gambia' },
    { code: 'GEL', symbol: '₾', name: 'Georgian Lari', countryCode: 'ge', countryName: 'Georgia' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'de', countryName: 'Germany' },
    { code: 'GHS', symbol: '₵', name: 'Ghanaian Cedi', countryCode: 'gh', countryName: 'Ghana' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'gr', countryName: 'Greece' },
    { code: 'GTQ', symbol: 'Q', name: 'Guatemalan Quetzal', countryCode: 'gt', countryName: 'Guatemala' },
    { code: 'GNF', symbol: 'FG', name: 'Guinean Franc', countryCode: 'gn', countryName: 'Guinea' },
    { code: 'GYD', symbol: '$', name: 'Guyanese Dollar', countryCode: 'gy', countryName: 'Guyana' },
    { code: 'HTG', symbol: 'G', name: 'Haitian Gourde', countryCode: 'ht', countryName: 'Haiti' },
    { code: 'HNL', symbol: 'L', name: 'Honduran Lempira', countryCode: 'hn', countryName: 'Honduras' },
    { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', countryCode: 'hk', countryName: 'Hong Kong' },
    { code: 'HUF', symbol: 'Ft', name: 'Hungarian Forint', countryCode: 'hu', countryName: 'Hungary' },
    { code: 'ISK', symbol: 'kr', name: 'Icelandic Króna', countryCode: 'is', countryName: 'Iceland' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee', countryCode: 'in', countryName: 'India' },
    { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', countryCode: 'id', countryName: 'Indonesia' },
    { code: 'IRR', symbol: '﷼', name: 'Iranian Rial', countryCode: 'ir', countryName: 'Iran' },
    { code: 'IQD', symbol: 'ع.د', name: 'Iraqi Dinar', countryCode: 'iq', countryName: 'Iraq' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'ie', countryName: 'Ireland' },
    { code: 'ILS', symbol: '₪', name: 'Israeli Shekel', countryCode: 'il', countryName: 'Israel' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'it', countryName: 'Italy' },
    { code: 'JMD', symbol: 'J$', name: 'Jamaican Dollar', countryCode: 'jm', countryName: 'Jamaica' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen', countryCode: 'jp', countryName: 'Japan' },
    { code: 'JOD', symbol: 'د.ا', name: 'Jordanian Dinar', countryCode: 'jo', countryName: 'Jordan' },
    { code: 'KZT', symbol: '₸', name: 'Kazakhstani Tenge', countryCode: 'kz', countryName: 'Kazakhstan' },
    { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling', countryCode: 'ke', countryName: 'Kenya' },
    { code: 'KWD', symbol: 'د.ك', name: 'Kuwaiti Dinar', countryCode: 'kw', countryName: 'Kuwait' },
    { code: 'KGS', symbol: 'сом', name: 'Kyrgyz Som', countryCode: 'kg', countryName: 'Kyrgyzstan' },
    { code: 'LAK', symbol: '₭', name: 'Lao Kip', countryCode: 'la', countryName: 'Laos' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'lv', countryName: 'Latvia' },
    { code: 'LBP', symbol: 'ل.ل', name: 'Lebanese Pound', countryCode: 'lb', countryName: 'Lebanon' },
    { code: 'LSL', symbol: 'L', name: 'Lesotho Loti', countryCode: 'ls', countryName: 'Lesotho' },
    { code: 'LRD', symbol: '$', name: 'Liberian Dollar', countryCode: 'lr', countryName: 'Liberia' },
    { code: 'LYD', symbol: 'ل.د', name: 'Libyan Dinar', countryCode: 'ly', countryName: 'Libya' },
    { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', countryCode: 'li', countryName: 'Liechtenstein' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'lt', countryName: 'Lithuania' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'lu', countryName: 'Luxembourg' },
    { code: 'MOP', symbol: 'MOP$', name: 'Macanese Pataca', countryCode: 'mo', countryName: 'Macau' },
    { code: 'MGA', symbol: 'Ar', name: 'Malagasy Ariary', countryCode: 'mg', countryName: 'Madagascar' },
    { code: 'MWK', symbol: 'MK', name: 'Malawian Kwacha', countryCode: 'mw', countryName: 'Malawi' },
    { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', countryCode: 'my', countryName: 'Malaysia' },
    { code: 'MVR', symbol: 'Rf', name: 'Maldivian Rufiyaa', countryCode: 'mv', countryName: 'Maldives' },
    { code: 'XOF', symbol: 'CFA', name: 'West African CFA Franc', countryCode: 'ml', countryName: 'Mali' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'mt', countryName: 'Malta' },
    { code: 'MRU', symbol: 'UM', name: 'Mauritanian Ouguiya', countryCode: 'mr', countryName: 'Mauritania' },
    { code: 'MUR', symbol: '₨', name: 'Mauritian Rupee', countryCode: 'mu', countryName: 'Mauritius' },
    { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso', countryCode: 'mx', countryName: 'Mexico' },
    { code: 'MDL', symbol: 'L', name: 'Moldovan Leu', countryCode: 'md', countryName: 'Moldova' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'mc', countryName: 'Monaco' },
    { code: 'MNT', symbol: '₮', name: 'Mongolian Tugrik', countryCode: 'mn', countryName: 'Mongolia' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'me', countryName: 'Montenegro' },
    { code: 'MAD', symbol: 'د.م.', name: 'Moroccan Dirham', countryCode: 'ma', countryName: 'Morocco' },
    { code: 'MZN', symbol: 'MT', name: 'Mozambican Metical', countryCode: 'mz', countryName: 'Mozambique' },
    { code: 'MMK', symbol: 'K', name: 'Myanmar Kyat', countryCode: 'mm', countryName: 'Myanmar' },
    { code: 'NAD', symbol: '$', name: 'Namibian Dollar', countryCode: 'na', countryName: 'Namibia' },
    { code: 'NPR', symbol: 'रू', name: 'Nepalese Rupee', countryCode: 'np', countryName: 'Nepal' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'nl', countryName: 'Netherlands' },
    { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', countryCode: 'nz', countryName: 'New Zealand' },
    { code: 'NIO', symbol: 'C$', name: 'Nicaraguan Córdoba', countryCode: 'ni', countryName: 'Nicaragua' },
    { code: 'XOF', symbol: 'CFA', name: 'West African CFA Franc', countryCode: 'ne', countryName: 'Niger' },
    { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', countryCode: 'ng', countryName: 'Nigeria' },
    { code: 'KPW', symbol: '₩', name: 'North Korean Won', countryCode: 'kp', countryName: 'North Korea' },
    { code: 'MKD', symbol: 'ден', name: 'Macedonian Denar', countryCode: 'mk', countryName: 'North Macedonia' },
    { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', countryCode: 'no', countryName: 'Norway' },
    { code: 'OMR', symbol: 'ر.ع.', name: 'Omani Rial', countryCode: 'om', countryName: 'Oman' },
    { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee', countryCode: 'pk', countryName: 'Pakistan' },
    { code: 'PAB', symbol: 'B/.', name: 'Panamanian Balboa', countryCode: 'pa', countryName: 'Panama' },
    { code: 'PGK', symbol: 'K', name: 'Papua New Guinean Kina', countryCode: 'pg', countryName: 'Papua New Guinea' },
    { code: 'PYG', symbol: '₲', name: 'Paraguayan Guarani', countryCode: 'py', countryName: 'Paraguay' },
    { code: 'PEN', symbol: 'S/.', name: 'Peruvian Sol', countryCode: 'pe', countryName: 'Peru' },
    { code: 'PHP', symbol: '₱', name: 'Philippine Peso', countryCode: 'ph', countryName: 'Philippines' },
    { code: 'PLN', symbol: 'zł', name: 'Polish Zloty', countryCode: 'pl', countryName: 'Poland' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'pt', countryName: 'Portugal' },
    { code: 'QAR', symbol: 'ر.ق', name: 'Qatari Riyal', countryCode: 'qa', countryName: 'Qatar' },
    { code: 'RON', symbol: 'lei', name: 'Romanian Leu', countryCode: 'ro', countryName: 'Romania' },
    { code: 'RUB', symbol: '₽', name: 'Russian Ruble', countryCode: 'ru', countryName: 'Russia' },
    { code: 'RWF', symbol: 'RF', name: 'Rwandan Franc', countryCode: 'rw', countryName: 'Rwanda' },
    { code: 'SAR', symbol: 'ر.س', name: 'Saudi Riyal', countryCode: 'sa', countryName: 'Saudi Arabia' },
    { code: 'XOF', symbol: 'CFA', name: 'West African CFA Franc', countryCode: 'sn', countryName: 'Senegal' },
    { code: 'RSD', symbol: 'din.', name: 'Serbian Dinar', countryCode: 'rs', countryName: 'Serbia' },
    { code: 'SCR', symbol: '₨', name: 'Seychellois Rupee', countryCode: 'sc', countryName: 'Seychelles' },
    { code: 'SLE', symbol: 'Le', name: 'Sierra Leonean Leone', countryCode: 'sl', countryName: 'Sierra Leone' },
    { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', countryCode: 'sg', countryName: 'Singapore' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'sk', countryName: 'Slovakia' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'si', countryName: 'Slovenia' },
    { code: 'SBD', symbol: '$', name: 'Solomon Islands Dollar', countryCode: 'sb', countryName: 'Solomon Islands' },
    { code: 'SOS', symbol: 'Sh', name: 'Somali Shilling', countryCode: 'so', countryName: 'Somalia' },
    { code: 'ZAR', symbol: 'R', name: 'South African Rand', countryCode: 'za', countryName: 'South Africa' },
    { code: 'KRW', symbol: '₩', name: 'South Korean Won', countryCode: 'kr', countryName: 'South Korea' },
    { code: 'SSP', symbol: '£', name: 'South Sudanese Pound', countryCode: 'ss', countryName: 'South Sudan' },
    { code: 'EUR', symbol: '€', name: 'Euro', countryCode: 'es', countryName: 'Spain' },
    { code: 'LKR', symbol: 'Rs', name: 'Sri Lankan Rupee', countryCode: 'lk', countryName: 'Sri Lanka' },
    { code: 'SDG', symbol: 'ج.س.', name: 'Sudanese Pound', countryCode: 'sd', countryName: 'Sudan' },
    { code: 'SRD', symbol: '$', name: 'Surinamese Dollar', countryCode: 'sr', countryName: 'Suriname' },
    { code: 'SEK', symbol: 'kr', name: 'Swedish Krona', countryCode: 'se', countryName: 'Sweden' },
    { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', countryCode: 'ch', countryName: 'Switzerland' },
    { code: 'SYP', symbol: '£S', name: 'Syrian Pound', countryCode: 'sy', countryName: 'Syria' },
    { code: 'TWD', symbol: 'NT$', name: 'New Taiwan Dollar', countryCode: 'tw', countryName: 'Taiwan' },
    { code: 'TJS', symbol: 'SM', name: 'Tajik Somoni', countryCode: 'tj', countryName: 'Tajikistan' },
    { code: 'TZS', symbol: 'TSh', name: 'Tanzanian Shilling', countryCode: 'tz', countryName: 'Tanzania' },
    { code: 'THB', symbol: '฿', name: 'Thai Baht', countryCode: 'th', countryName: 'Thailand' },
    { code: 'XOF', symbol: 'CFA', name: 'West African CFA Franc', countryCode: 'tg', countryName: 'Togo' },
    { code: 'TOP', symbol: 'T$', name: 'Tongan Paʻanga', countryCode: 'to', countryName: 'Tonga' },
    { code: 'TTD', symbol: 'TT$', name: 'Trinidad & Tobago Dollar', countryCode: 'tt', countryName: 'Trinidad & Tobago' },
    { code: 'TND', symbol: 'د.ت', name: 'Tunisian Dinar', countryCode: 'tn', countryName: 'Tunisia' },
    { code: 'TRY', symbol: '₺', name: 'Turkish Lira', countryCode: 'tr', countryName: 'Turkey' },
    { code: 'TMT', symbol: 'T', name: 'Turkmen Manat', countryCode: 'tm', countryName: 'Turkmenistan' },
    { code: 'UGX', symbol: 'USh', name: 'Ugandan Shilling', countryCode: 'ug', countryName: 'Uganda' },
    { code: 'UAH', symbol: '₴', name: 'Ukrainian Hryvnia', countryCode: 'ua', countryName: 'Ukraine' },
    { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', countryCode: 'ae', countryName: 'United Arab Emirates' },
    { code: 'GBP', symbol: '£', name: 'British Pound', countryCode: 'gb', countryName: 'United Kingdom' },
    { code: 'USD', symbol: '$', name: 'US Dollar', countryCode: 'us', countryName: 'United States' },
    { code: 'UYU', symbol: '$U', name: 'Uruguayan Peso', countryCode: 'uy', countryName: 'Uruguay' },
    { code: 'UZS', symbol: 'сўм', name: 'Uzbekistani Som', countryCode: 'uz', countryName: 'Uzbekistan' },
    { code: 'VUV', symbol: 'VT', name: 'Vanuatu Vatu', countryCode: 'vu', countryName: 'Vanuatu' },
    { code: 'VES', symbol: 'Bs.S', name: 'Venezuelan Bolívar', countryCode: 've', countryName: 'Venezuela' },
    { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', countryCode: 'vn', countryName: 'Vietnam' },
    { code: 'YER', symbol: '﷼', name: 'Yemeni Rial', countryCode: 'ye', countryName: 'Yemen' },
    { code: 'ZMW', symbol: 'ZK', name: 'Zambian Kwacha', countryCode: 'zm', countryName: 'Zambia' },
    { code: 'ZWL', symbol: '$', name: 'Zimbabwean Dollar', countryCode: 'zw', countryName: 'Zimbabwe' },
];

// Base prices in INR
const BASE_PRICES_INR: Record<string, number> = {
    join: 2500,
    plan: 2500,
};

// Exchange rates from INR (approximate)
const EXCHANGE_RATES: Record<string, number> = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0094,
    AED: 0.044,
    AUD: 0.018,
    CAD: 0.016,
    JPY: 1.79,
    CNY: 0.087,
    SGD: 0.016,
    CHF: 0.011,
    SAR: 0.045,
    MYR: 0.054,
    THB: 0.42,
    KRW: 16.5,
    BRL: 0.061,
    ZAR: 0.22,
    SEK: 0.13,
    NOK: 0.13,
    DKK: 0.082,
    NZD: 0.020,
    PHP: 0.68,
    IDR: 191,
    BDT: 1.44,
    PKR: 3.34,
    LKR: 3.60,
    NPR: 1.60,
    NGN: 18.6,
    EGP: 0.58,
    TRY: 0.39,
    RUB: 1.07,
    MXN: 0.21,
    PLN: 0.048,
    HUF: 4.46,
    CZK: 0.28,
    TWD: 0.39,
    HKD: 0.094,
    VND: 302,
    KWD: 0.0037,
    QAR: 0.044,
    BHD: 0.0045,
    OMR: 0.0046,
};

// Phone dial codes by country code (ISO 3166-1 alpha-2, lowercase)
const DIAL_CODES: Record<string, string> = {
    af: '+93', al: '+355', dz: '+213', ad: '+376', ao: '+244',
    ag: '+1', ar: '+54', am: '+374', au: '+61', at: '+43',
    az: '+994', bs: '+1', bh: '+973', bd: '+880', bb: '+1',
    by: '+375', be: '+32', bz: '+501', bj: '+229', bt: '+975',
    bo: '+591', ba: '+387', bw: '+267', br: '+55', bn: '+673',
    bg: '+359', bf: '+226', bi: '+257', kh: '+855', cm: '+237',
    ca: '+1', cv: '+238', cf: '+236', td: '+235', cl: '+56',
    cn: '+86', co: '+57', km: '+269', cd: '+243', cg: '+242',
    cr: '+506', hr: '+385', cu: '+53', cy: '+357', cz: '+420',
    dk: '+45', dj: '+253', do: '+1', ec: '+593', eg: '+20',
    sv: '+503', gq: '+240', er: '+291', ee: '+372', sz: '+268',
    et: '+251', fj: '+679', fi: '+358', fr: '+33', ga: '+241',
    gm: '+220', ge: '+995', de: '+49', gh: '+233', gr: '+30',
    gt: '+502', gn: '+224', gy: '+592', ht: '+509', hn: '+504',
    hk: '+852', hu: '+36', is: '+354', in: '+91', id: '+62',
    ir: '+98', iq: '+964', ie: '+353', il: '+972', it: '+39',
    jm: '+1', jp: '+81', jo: '+962', kz: '+7', ke: '+254',
    kw: '+965', kg: '+996', la: '+856', lv: '+371', lb: '+961',
    ls: '+266', lr: '+231', ly: '+218', li: '+423', lt: '+370',
    lu: '+352', mo: '+853', mg: '+261', mw: '+265', my: '+60',
    mv: '+960', ml: '+223', mt: '+356', mr: '+222', mu: '+230',
    mx: '+52', md: '+373', mc: '+377', mn: '+976', me: '+382',
    ma: '+212', mz: '+258', mm: '+95', na: '+264', np: '+977',
    nl: '+31', nz: '+64', ni: '+505', ne: '+227', ng: '+234',
    kp: '+850', mk: '+389', no: '+47', om: '+968', pk: '+92',
    pa: '+507', pg: '+675', py: '+595', pe: '+51', ph: '+63',
    pl: '+48', pt: '+351', qa: '+974', ro: '+40', ru: '+7',
    rw: '+250', sa: '+966', sn: '+221', rs: '+381', sc: '+248',
    sl: '+232', sg: '+65', sk: '+421', si: '+386', sb: '+677',
    so: '+252', za: '+27', kr: '+82', ss: '+211', es: '+34',
    lk: '+94', sd: '+249', sr: '+597', se: '+46', ch: '+41',
    sy: '+963', tw: '+886', tj: '+992', tz: '+255', th: '+66',
    tg: '+228', to: '+676', tt: '+1', tn: '+216', tr: '+90',
    tm: '+993', ug: '+256', ua: '+380', ae: '+971', gb: '+44',
    us: '+1', uy: '+598', uz: '+998', vu: '+678', ve: '+58',
    vn: '+84', ye: '+967', zm: '+260', zw: '+263',
};

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (c: Currency) => void;
    currencies: Currency[];
    getPrice: (productKey: string) => string;
    getRawPrice: (productKey: string) => number;
    getDialCode: () => string;
    isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType>({
    currency: DEFAULT_CURRENCY,
    setCurrency: () => { },
    currencies: ALL_COUNTRIES,
    getPrice: () => '',
    getRawPrice: () => 0,
    getDialCode: () => '+91',
    isLoading: false,
});

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currency, setCurrency] = useState<Currency>(DEFAULT_CURRENCY);

    const getPrice = (productKey: string): string => {
        const baseINR = BASE_PRICES_INR[productKey] ?? 0;
        const rate = EXCHANGE_RATES[currency.code];

        if (rate !== undefined) {
            const converted = Math.round(baseINR * rate);
            return `${currency.symbol}${converted.toLocaleString()}`;
        }

        // Unknown currency — show INR equivalent
        return `${currency.symbol}${baseINR.toLocaleString()}`;
    };

    const getRawPrice = (productKey: string): number => {
        const baseINR = BASE_PRICES_INR[productKey] ?? 0;
        const rate = EXCHANGE_RATES[currency.code];
        if (rate !== undefined) {
            return Math.round(baseINR * rate);
        }
        return baseINR;
    };

    const getDialCode = (): string => {
        return DIAL_CODES[currency.countryCode] || '+91';
    };

    return (
        <CurrencyContext.Provider value={{
            currency,
            setCurrency,
            currencies: ALL_COUNTRIES,
            getPrice,
            getRawPrice,
            getDialCode,
            isLoading: false,
        }}>
            {children}
        </CurrencyContext.Provider>
    );
};
