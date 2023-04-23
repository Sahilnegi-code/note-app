import React from 'react'

const Ca = () => {
    const obj = [{
        id : "Product1",
        price : "$10",
        name : "First Product"
    } ,{
        id : "Product2",
        price : "$20",
        name : "Second Product"
    }]
  return (
    <>
    <div style={{}}> 
    <div style={{display:'flex' , flexDirection:'column'} }   >
{

obj.map((curr)=>(

<div className={curr.id} style={{backgroundColor:'yellow'}} >

<div style={{backgroundColor:'white'}}>
<p>{curr.id}</p>
<p>{curr.price}</p>
<p>{curr.name}</p>
</div>


</div>


))






}




    </div>
    </div>
         
    </>
  )
}

export default Ca;
