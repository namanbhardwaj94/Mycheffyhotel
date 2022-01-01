import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
import Header from './Header'
import Card from './Card'
import Footer from "./Footer"
import { PrismaClient } from '@prisma/client';

export async function getStaticProps() {

  const prisma = new PrismaClient();
  const hotels = await prisma.hotel.findMany();
  const allhotel = JSON.stringify(hotels)

  
  return {
    props:  {allhotel}

    
  };
}


export default ({ allhotel })  => (
  
    <>
    <Navbar />
    <Header />

    <div className ="jobcontainer mt-2">
    {JSON.parse(allhotel).map((hotel) => (
        <Card hotel={hotel} key={hotel.id}/>

      ))}
    </div>
    <Footer />
</>
  );

