import { Link } from "react-router-dom"

const Ammo = ({mun}) => { 
    return (
        <>
            <Link className="elemento">
                                        {mun.name}
                                        <br />
                                        <img className="img" src={mun.image} alt="ga" />
                                        <p>Click for More Details </p>
            </Link>
        </>
    )
 }

export default Ammo