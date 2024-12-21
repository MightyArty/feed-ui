import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo-search-wrapper">
        <div className="logo-container">
          <img src="/tedooo_logo.png" alt="Tedoo Logo" className="logo" />
        </div>
        <div className="search-container">
          <img src="/search_icon.png" alt="Search Icon" className="search-icon" />
          <input
            className="search-box"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="buttons-account-wrapper">
        {/* Home Button */}
        <button className="nav-button active">
          <svg className="button-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z" stroke="#2DB8A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.75 16.5V9H11.25V16.5" stroke="#2DB8A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className="button-text">Home</span>
        </button>

        {/* Messaging Button */}
        <button className="nav-button">
          <svg className="button-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.75 7.62502C14.7526 8.61492 14.5213 9.59144 14.075 10.475C13.5458 11.5338 12.7323 12.4244 11.7256 13.047C10.7189 13.6696 9.55868 13.9996 8.375 14C7.3851 14.0026 6.40859 13.7713 5.525 13.325L1.25 14.75L2.675 10.475C2.2287 9.59144 1.99742 8.61492 2 7.62502C2.00046 6.44134 2.33046 5.28116 2.95304 4.27443C3.57562 3.26771 4.46619 2.4542 5.525 1.92502C6.40859 1.47872 7.3851 1.24744 8.375 1.25002H8.75C10.3133 1.33627 11.7898 1.99609 12.8969 3.10317C14.0039 4.21024 14.6638 5.68676 14.75 7.25002V7.62502Z" stroke="#949796" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className="button-text">Messaging</span>
        </button>

        {/* Notifications Button */}
        <button className="nav-button">
          <svg className="button-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 6C13.5 4.80653 13.0259 3.66193 12.182 2.81802C11.3381 1.97411 10.1935 1.5 9 1.5C7.80653 1.5 6.66193 1.97411 5.81802 2.81802C4.97411 3.66193 4.5 4.80653 4.5 6C4.5 11.25 2.25 12.75 2.25 12.75H15.75C15.75 12.75 13.5 11.25 13.5 6Z" stroke="#949796" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.2974 15.75C10.1655 15.9773 9.97627 16.166 9.74856 16.2971C9.52085 16.4283 9.26268 16.4973 8.99989 16.4973C8.73711 16.4973 8.47893 16.4283 8.25122 16.2971C8.02351 16.166 7.83425 15.9773 7.70239 15.75" stroke="#949796" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className="button-text">Notifications</span>
        </button>

        {/* Account Icon */}
        <div className="account-icon">
          <img src="/account_logo.png" alt="Account Logo" className="account-logo" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
