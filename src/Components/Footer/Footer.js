import React from 'react';
import footerStyle from './Footer.module.css';

const Footer = () => {
    return (
        <div className={footerStyle.container}><br/>
           <span className={footerStyle.footerText}>&copy; Expense Tracker App 2 | Created by Noman Ishaq</span>
        </div>
    )
}

export default Footer
