import React from 'react';

const Footer = ()=>{

    const year = new Date().getFullYear();

    return(
        <>
            <footer className="bg-light text-center w-100 mt-5">
                <p>© {year} WildArt. All Rights Reserved | Terms and Conditions</p>
            </footer>
        </>
    );
};

export default Footer;