import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PrismaClient } from '@prisma/client';



export default function Card(hotel) {
  
  
  let hotelid = "allhotel/".concat(hotel.hotel.id)
  let url = "/"+String(hotel.hotel.imageurl)+".jpg"
 
  
  return (
     

    <div className="cardcon mt-4 mb-2 mr-5">
    <div classNameName="imgcard">
  <Image   src={url} width="300" height="200" />
 </div>
  <div className="card-body">
    <h5 className="card-title">{hotel.hotel.name}</h5>
    <p className="card-text">Open: {hotel.hotel.openingTime} - {hotel.hotel.closingTime}</p>
    <allhotel key={hotel.hotel.id} {...hotel}>
    <a href={hotelid} className="btn btn-primary">More Info</a></allhotel>
  </div>
</div>
  
     
  )
}
