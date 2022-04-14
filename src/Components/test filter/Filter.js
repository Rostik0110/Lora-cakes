import React, { useState, useEffect } from "react";
import "./Filter.css";

  
const Filter = () =>{

    const [active, setActive] = useState(false)    
    const [priceSum, setPriceSum] = useState([])  
    const [finishSum, setFinishSum] = useState(0)  

    const ingridient = [
            {id:1,name:"Жиле",info:"Інформація про начинку",price:20},
            {id:2,name:"Крем",info:"Інформація про начинку",price:30}
        
    ];

    const Kalculator = (price) => {       
        setPriceSum([...priceSum,price])
        fff()                
    };  
    const fff = ()=>{
        setFinishSum( priceSum.reduce((total,i)=>total+i,0) );
    }
    console.log(priceSum)

console.log(finishSum)  
    return (
        <>
        {ingridient.map((partInfo, index) => {
            const itemId = partInfo.id;
            const itemPrice = partInfo.price;
          return (
              <div >
                    <div key={index} className="button" >
                       <div className="nameIngridient" onClick={()=>setActive(itemId)} >{partInfo.name}</div>
                       <div className={active === itemId ? "info" : "info active"} >
                           <div>{partInfo.info}</div>
                           <div>{partInfo.price} грн</div>
                           <div className="buttonAdd" onClick={()=>Kalculator(itemPrice)}>Добавить</div>
                           
                           
                       </div>

                   </div>
              </div>

    )})}

    </>
    )
}
 export default Filter;