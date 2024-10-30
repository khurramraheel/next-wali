"use client";
import axios from "axios";

export default ()=>{

const addKaro = async ()=>{
  

  let a = +prompt('ente rnumber');
  let b = +prompt('ente rnumber');

  let resp = await axios.post('/api/calculation', {num1:a, num2:b} );
  console.log(resp.data);
  console.log(20)

}

  return <div>
    
    <button onClick={addKaro}>Add karo</button>

  </div>

}

// "use client";

// // import { useState } from "react"

// // export default ()=>{

// //   let [names, setNames]  = useState(['a','b','c','d'])

// //   const addName = ()=>{
    
// //     let newName =  prompt("enter name");
// //     names.push(newName);
    
// //     setNames([...names]);

// //     console.log(names);

// //   }

// //   return <div>

// //   <ol>
// //     {
// //       names.map(function(name, i){
// //         return <li>

// //                 {name}

// //                 <button onClick={function(){
                  
// //                   names.splice(i, 1);
// //                   console.log(names);
// //                   setNames([...names]);

// //                 }}>Delete</button>

// //           </li>
// //       })
// //     }
// //   </ol>

// //   <button onClick={addName}>Add name</button>

// //   </div>
  
// // }


// import Card from "@/components/card/card";
// import "./page.css";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { ads } from "./data";

// export default function Home() {

//   let price = 230;

//   // let [ads, setAds] = useState([
//   //   {
//   //     name:"HP 650 G1",
//   //     price:100,
//   //     src:"https://images.olx.com.pk/thumbnails/492705938-240x180.webp"
//   //   },
//   //   {
//   //     name:"DELL 5460",
//   //     price:200,
//   //     src:"https://images.olx.com.pk/thumbnails/493055944-240x180.webp"
//   //   },
//   //   {
//   //     name:"DELL Desktop",
//   //     price:300,
//   //     src:"https://images.olx.com.pk/thumbnails/388020951-240x180.webp"
//   //   },
//   //   {
//   //     name:"OPPO A8",
//   //     price:400,
//   //     src:"https://images.olx.com.pk/thumbnails/463631645-800x600.webp"
//   //   },
//   //   {
//   //     name:"OPPO BRAND NEW ",
//   //     price:400,
//   //     src:"https://images.olx.com.pk/thumbnails/463631645-800x600.webp"
//   //   },
//   //   {
//   //     name:"HP 560 NEW ",
//   //     price:500,
//   //     src:"https://images.olx.com.pk/thumbnails/463631645-800x600.webp"
//   //   }
//   // ]);


//   const createAd = ()=>{

//     let name = prompt("Enter ad name");
//     let price = +prompt("Enter ad price");
//     let src = prompt("Enter ad src");

//     let ad  = {
//       name, 
//       price,
//       src
//     }

//     ads.push(ad);
//     setAds([...ads]);

//     toast.success('ad create hogya', {theme: "dark", position: "top-left"});
//     toast.warn('ad create hogya');
//     toast.info('ad create hogya');
//     toast.error('ad create hogya');

//   }

//   return (
//     <div>

//       <button onClick={createAd}>Create Ad</button>
     
//      <div id="card-container">
     
//      {
//       ads.map((a2)=>{
//         return <Card meraAd={a2}></Card>
//       })
//      }

//     </div>

//     </div>
//   );
// }
