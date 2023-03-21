import { loaderMun } from "../pages/Municiones"

const Pagination = ({setMuns}) => {
    
    function SigtPag(pag) {
        loaderMun(pag).then((result)=> {
            setMuns(result)
        })
    }

    return (
        <>
            <div className="pagination">
                <p onClick={()=>SigtPag(0)} className="pagep">1</p>
                <p onClick={()=>SigtPag(1)} className="pagep">2</p>
                <p onClick={()=>SigtPag(2)} className="pagep">3</p>
            </div>
        </>
    )
}

export default Pagination



