import React, { memo } from 'react';
import './Header.css';

interface HeaderProps {
  onClear: () => void;
  onCopy: () => void;
}

export const Header: React.FC<HeaderProps> = memo(({ onClear, onCopy }) => {
  return (
    <header className="header-container">
      <h1 className="header-title">Near-Earth Object Overview</h1>
      <div className="button-group">
        <button className="clear-button" onClick={onClear}>
          Clear Filters and Sorters
        </button>
        <button className="copy-button" onClick={onCopy}>
          Copy Selected to Clipboard
        </button>
      </div>
    </header>
  );
});