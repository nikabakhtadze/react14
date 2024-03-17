import React  from "react"
function Number(props){
    return(
       <React.Fragment>
        {
            props.masivi.map(item => <p>{item}</p>)
        }
        </React.Fragment>
    )
}
export default Number