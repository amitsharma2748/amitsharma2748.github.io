import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';
import DecodingText from '../DecodingText';
import HangingMonkey from '../HangingMonkey';
import useBaseUrl from '@docusaurus/useBaseUrl';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/amit-sharma-071654158/',
    icon: (
      <svg className={styles.socialIcon} viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    url: 'https://github.com/amitsharma2748',
    icon: (
      <svg className={styles.socialIcon} viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    )
  },
  {
    name: 'Email',
    url: 'mailto:sharma670amit@gmail.com',
    icon: (
      <svg className={styles.socialIcon} viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    )
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSocialDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navigation = [
    { title: 'Home', to: '/', emoji: '🏠' },
    { title: 'Resume', to: '/pdf/Amit_Resume.pdf', emoji: '', download: true }
  ];

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'sharma670amit@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  return (
    <header className={styles.header}>
      <HangingMonkey />
      <nav className={styles.headerNav}>
        
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.menuItems} ${isMenuOpen ? styles.active : ''}`}>
        {navigation.map((item, index) => (
            item.download ? (
              <a 
                key={item.to}
                href={useBaseUrl(item.to)}
                download
                onClick={() => setIsMenuOpen(false)}
                className={isActive(item.to) ? styles.activeLink : ''}
              >
                <span className={styles.emoji}>{item.emoji} </span>
                {isHomePage ? (
                  <DecodingText 
                    text={item.title}
                    delay={800 + (index * 200)}
                    duration={2000}
                  />
                ) : (
                  item.title
                )}
              </a>
            ) : (
              <Link 
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={isActive(item.to) ? styles.activeLink : ''}
                target={item.to.startsWith('http') ? '_blank' : undefined}
                rel={item.to.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className={styles.emoji}>{item.emoji} </span>
                {isHomePage ? (
                  <DecodingText 
                    text={item.title}
                    delay={800 + (index * 200)}
                    duration={2000}
                  />
                ) : (
                  item.title
                )}
                {item.to.startsWith('http') && (
                  <svg className={styles.externalIcon} viewBox="0 0 24 24" width="14" height="14">
                    <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                  </svg>
                )}
              </Link>
            )
          ))}
        </div>

        <div className={styles.socialDropdown} ref={dropdownRef}>
          <button 
            className={styles.socialDropdownButton}
            onClick={() => setIsSocialDropdownOpen(!isSocialDropdownOpen)}
            aria-label="Toggle social links"
          >
            Connect With Me
          </button>
          
          {isSocialDropdownOpen && (
            <div className={styles.socialDropdownContent}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={link.name === 'Email' ? handleEmailClick : undefined}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={styles.socialLink}
                >
                  {link.icon}
                  <span>
                    {link.name === 'Email' ? (
                      copiedEmail ? 'Copied!' : 'Copy Email'
                    ) : (
                      link.name
                    )}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}