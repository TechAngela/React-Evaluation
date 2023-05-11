import Buttons from "./Buttons"
import Boddy from "./Boddy"
import './Card.css'

function Card(props) {

  return (
     <div className="parent">
          <div className="logo">
               <img src={props.src}/>
          </div>
          <div className="body">
               <div className="top">
                    {props.company}
                    
                    {
                         props.header.map((item , index)=>{
                              return (
                              <Boddy
                               txt={item.name} 
                               bg={item.bgcolor}
                               key={index}/>
                         )})
                    }
               </div>
               <h3>{props.position}</h3>
               <div className="bot">
                    <div>{props.days}</div>
                    <div>{props.contract}</div>
                    <div>{props.location}</div>
             </div>
          </div>

          <div className="Right">
               {
                    props.labels.map((item,idx) =>{
                         
                         return (
                              <Buttons
                                   key={item}
                                   btnName={item}
                              />
                         )
                    })
               }
               
               
          </div>
          
    </div>
  )
}

export default Card