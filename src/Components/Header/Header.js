import React from 'react';
import headerStyle from './Header.module.css';

const Header = () => {
    return (
        <div className={headerStyle.header}>
            <h1 className={headerStyle.title}>Expense Tracker App (2)</h1>
        </div>
    )
}

export default Header;