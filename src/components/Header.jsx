import React from "react";

function Header() {
    const logo = (
        <img
            src="https://static.macupdate.com/products/59991/l/keepnotes-for-google-keep-logo.png?v=1583918549"
            alt="logo" width="5%" height="60px"
        />
    );
    return (
        <div className="header">
            {logo}
            <h1>Keep</h1>
        </div>
    );
}

export default Header;
//https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png
