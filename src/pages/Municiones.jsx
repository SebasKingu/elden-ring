import { Link,useLoaderData } from "react-router-dom"
import Elemento from "../components/Elemento"

const Municiones = () => {
    const muns = useLoaderData()
    console.log(muns)
    return ( 
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
    )
}

export default Municiones

export const loaderMun = async () => {
    const res = await fetch("https://eldenring.fanapis.com/api/ammos")
    const muns = await res.json();
    return muns.data
}