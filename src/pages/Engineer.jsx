import './Engineer.css'
// import jane from '../assets/jane.avif'
// import john from '../assets/john.avif'


function Engineer({name,image, role}){
    return(
    <div className="engineer">
        <div className="engineerFlexBox">
        <img src={image} alt={name}/>
             <h3>{name}</h3>
            <p>{role}</p>
        </div>
    </div>
    )
}


export default Engineer