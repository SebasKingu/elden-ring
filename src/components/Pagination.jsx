import { SigtPag } from "../js/loaders";

const Pagination = ({setMuns,setArmors,section}) => {
    

    return (
        <>
            <div className="pagination">
                <p onClick={()=>SigtPag(0,section,setMuns,setArmors)} className="pagep">1</p>
                <p onClick={()=>SigtPag(1,section,setMuns,setArmors)} className="pagep">2</p>
                <p onClick={()=>SigtPag(2,section,setMuns,setArmors)} className="pagep">3</p>
            </div>
        </>
    )
}

export default Pagination



