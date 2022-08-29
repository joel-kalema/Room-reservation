import React from 'react';
import './LoadingSpinnerButton.css';
import Spinner from '../../assets/spinner.gif';

const SnipperLoginBtn = ({ title, loading, onClick }) => (
  <button onClick={onClick} className="loading-spinner-button">
    {loading ? <img src={Spinner} alt="spinner" /> : `${title} `}
  </button>
);

export default SnipperLoginBtn;
