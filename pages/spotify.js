import React from 'react';
import Head from 'next/head';
import Navbar from '../components/spotify/navbar';
import Content from '../components/spotify/content';
import Footer from '../components/spotify/footer';

export default function Spotify() {
   return (
      <>
         <Head>
            <title>Spotify Replica</title>
         </Head>
         <Navbar></Navbar>
         <Content></Content>
         <Footer></Footer>
      </>
   );
}
