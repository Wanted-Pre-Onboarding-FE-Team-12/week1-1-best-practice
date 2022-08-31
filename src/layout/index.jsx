import React from "react";
import Header from "@components/Header";

// CSS
import GlobalStyles from "@styles/globalStyle";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <GlobalStyles />
        </>
    );
};

export default Layout;
