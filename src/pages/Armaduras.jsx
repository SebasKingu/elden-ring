import { useState } from "react"
import { Link,useLoaderData } from "react-router-dom"
import Armor from "../components/Armor"
import Pagination from "../components/Pagination"

const Armaduras = () => {
    const [armors,setArmors] = useState(useLoaderData())
    
    return ( 
        <>
            <div className="container">
                {armors.length > 0 ? (      
                    armors.map((armor)=>{
                        return  (
                            <Armor armor={armor} key={armor.id} />
                        )})
                ) : (
                    <li>No se encontaron Armaduras</li>
                )}
            </div>

            <Pagination setArmors={setArmors} section={"armors"} />
        </>
    )

}

export default Armaduras



