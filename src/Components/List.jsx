import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const List=()=>{

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("arjit")
    const onChangesearch=(event)=>
    {
        setSearch(event.target.value)
        
    }
    const getdetails=async()=>{
        const url=`https://itunes.apple.com/search?term=${search}&limit=10`
         const response= await fetch (url);
         const ndata= await response.json();
         console.log(ndata)
         setData(ndata.results)
    }
useEffect(() => {

getdetails();
},[]);

return<>
{
       data.map((element)=>{
           return (

                    <div className="container">
                        <div className="row">
                       
 <input className="form-control me-2" onChange={onChangesearch} 
 value={search} type="search" placeholder="Search" aria-label="Search"/>

                            <div className="col-md-3">
                                <div className="row">
                              <p>{element.artistName}</p>
                                </div>

                            </div>
                            </div>


                    </div>
            




           )





       })





    }

</>





}

export default List;