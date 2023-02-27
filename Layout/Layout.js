import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import Head from 'next/head';
import React, { useState } from 'react';

const Layout = ({children,title,description,body,thumb}) => {
    return (
        <div>

            <Navbar />
             <Head>
             <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={body} />
        <meta
          property="og:description"
          content={body}
        />
        <meta
          property="og:image"
          content={thumb}
        />
      </Head>
      <main>
        {children}
      </main>
      <Footer />
        </div>
    );
};

export default Layout;