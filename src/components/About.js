import React,  {useState} from 'react'

export const About = () => {
  const [mystyle,setMystyle] = useState({
    color:'black',
    backgroundColor:'white',
    mode: 'Dark'
  })
  const handleDarkMode = () =>{

    if(mystyle.color === 'white'){
        setMystyle({
            color:'black',
            backgroundColor:'white',
            mode: 'Dark'
        })
    }
    else{
        setMystyle({
            color:'white',
            backgroundColor:'black',
            mode: 'Light'
        })
    }
    
  }
  return (
    <>
        <div className="accordion mb-3" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        <button className='btn btn-outline-info' onClick={handleDarkMode}>Enable {mystyle.mode} Mode</button>
    </>
  )
}
