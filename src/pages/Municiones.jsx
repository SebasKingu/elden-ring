import { useEffect, useState } from "react"
import { Link,useLoaderData } from "react-router-dom"
import Pagination from "../components/Pagination"

const Municiones = () => {
    const [muns,setMuns] = useState(useLoaderData())
    
    
    return ( 
        <>
            <div className="container">
                {muns.length > 0 ? (      
                    muns.map((mun)=>{
                        return  (
                                <Link className="elemento" key={mun.id}>
                                    {mun.name}
                                    <br />
                                    <img src={mun.image} alt="ga" />
                                    <p>{mun.description} </p>
                                </Link>
                        )})
                ) : (
                    <li>No se encontaron Municiones</li>
                )}
            </div>

            <Pagination setMuns={setMuns} />
        </>
    )

}

export default Municiones


export const loaderMun = async (page) => {  
    const res = await fetch(`https://eldenring.fanapis.com/api/ammos?limit=20&page=${page}`)
    const muns = await res.json();
    return muns.data
}


