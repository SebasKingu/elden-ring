import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import Ammo from "../components/Ammo"
import Pagination from "../components/Pagination"

const Municiones = () => {
    const [muns,setMuns] = useState(useLoaderData())
    
    return ( 
        <>
            <div className="container">
                {muns.length > 0 ? (      
                    muns.map((mun)=>{
                        return  (
                                <Ammo mun={mun} key={mun.id} />
                        )})
                ) : (
                    <li>No se encontaron Municiones</li>
                )}
            </div>
            <Pagination setMuns={setMuns} section={"ammos"} />
        </>
    )

}

export default Municiones