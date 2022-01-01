import { PrismaClient } from '@prisma/client';
import Navbar from '../Navbar'

import Image from 'next/image'
import Footer from '../footer'

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();

  const address = await prisma.address.findMany({
    where: {
      hotelId: params.id
    }
  });
  const hotel = await prisma.hotel.findMany
  ({
    where: {
      id: params.id
    }
  });
  const hot_add  = Object.assign({}, address[0], hotel[0]);
  const address_hotel = JSON.stringify(hot_add)

  return {
    props: {
      address_hotel 
    }
  };
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const Address_info = await prisma.address.findMany();

  return {
    paths: Address_info.map((address) => ({
      params: {
        id: address.hotelId.toString()
      }
    })),
    fallback: false
  };
}



export default function id(address_hotel) {

  const hotel_add = JSON.parse(address_hotel.address_hotel)
  
  let iurl = "/"+String(hotel_add.imageurl)+".jpg"


  const dates =[]
  for (let i = 0; i < 3; i++) {
  var date_info = new Date();
  date_info.setDate(date_info.getDate()+i);
  const month = date_info.toLocaleString('default', { month: 'long' })
  date_info = date_info.getDate()+' '+month+' '+date_info.getFullYear()
  dates.push(date_info)
  }

  const dt = new Date(1970, 0, 1)
  const rc = [];
  while (dt.getDate() === 1) {
      rc.push(dt.toLocaleTimeString('en-US',{hour: '2-digit'}))
      dt.setHours(dt.getHours() +1 )
  }
  let index = rc.indexOf(hotel_add.openingTime)
  let index1 = rc.indexOf(hotel_add.closingTime)
  let row_table = rc.slice(index,index1)
  
  const opencloseprice= {} 
  

 function handleClick(row) {
    
        let tableindex = rc.indexOf(row.target.value)+1
        let openprice = row.target.value
        let closeprice = rc[tableindex] 
        let dateindex = Number(row.target.name) 
        let daterow = dates[dateindex]
        
        let doc = document.getElementById("displaytable")
        let doc2 = document.getElementById("daterow")
        let doc3 = document.getElementById("openprice")
        let doc4 = document.getElementById("closeprice")
        doc2.innerText = daterow
        doc3.innerText = openprice
        doc4.innerText = closeprice
        
        doc.style.cssText = "display: block; width: 100%;"
        
  };


  return (
     
<>
  <Navbar />


<div class="card flex-row flex-wrap">
        <div class="card-header border-0">
            <Image src={iurl} width="300" height="300"/>
        </div>
        <div class="card-block px-2 mt-5">
            <h4 class="card-title">{hotel_add.name}</h4>
            <h4 class="card-text">Price per hour: ${hotel_add.pricePerUnitTime}</h4>
            <h4 className="text-secondary">Opening: {hotel_add.openingTime} - {hotel_add.closingTime}</h4>
            <h4 className="">Address: {hotel_add.street} </h4>
            
        </div>
        
    </div>

<h1 className=" ml-3 mt-4">Make a Booking</h1> 
<div style={{overflowX:'auto'}}>
  <table id="displaytable" className="table table-bordered" style={{display: 'none', width: '100%'}}   >
     <thead>
    <tr>
      <th scope="col">Date</th>
      
      <th scope="col">Time from</th>
      <th scope="col">Time to</th>
      <th scope="col">Price</th>
      <th scope="col">Blocking</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td id='daterow' align="center"></td>
      <td id='openprice'align="center"></td>
      <td  id ='closeprice' align="center"></td>
    
      <td align="center">${hotel_add.pricePerUnitTime}</td>
      <td align="center"><button className ="btn">Confirm Booking</button></td>
      
    </tr>
    </tbody>
  </table> 
  </div>



<div style={{overflowX:'auto'}}>
<div class="table-wrapper-scroll-y my-custom-scrollbar">
<table className="table-in">
  <thead>
    <tr>
      <th scope="col"></th>
      
      <th style={{fontFamily: "Open Sans"}} scope="col">{dates[0]}</th>
      <th style={{fontFamily: "Open Sans"}} scope="col">{dates[1]}</th>
      <th style={{fontFamily: "Open Sans"}} scope="col">{dates[2]}</th>
    </tr>
  </thead>
  
  <tbody >

  {row_table.map((row) => (
      <tr>
      <th scope="row" style={{fontFamily: "Open Sans"}}>{row}</th>
      <td><button className="button"  value={row} name='0' onClick={(e)=>{handleClick(e)}}>Booking For {row}</button></td>
      <td><button className="button" value={row}  name='1' onClick={(e)=>{handleClick(e)}}>Booking For {row}</button></td>
      <td><button className="button"  value={row} name='2' onClick={(e)=>{handleClick(e)}}>Booking For {row}</button></td>
    </tr>

      ))}
   
   
  </tbody>
</table>
</div>
</div>



<Footer />
  
    


   
  
  </>  
  
     
  )
}
