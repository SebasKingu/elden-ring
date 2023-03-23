import { Link } from "react-router-dom"

const Armor = ({armor}) => {
    return (
        <Link className="elemento">
                                    {armor.name}
                                    <br />
                                    <img className="img" src={armor.image} alt="ga" />
                                    <p>Click for More Details</p>
        </Link>
    )
}

export default Armor