
import './App.css'
import Card from './components/Card'
import img from './assets/account.svg'
import img2 from './assets/manage.svg'
import img3 from './assets/myhome.svg'
import img4 from './assets/account.svg'
import img5 from './assets/account.svg'



function App() {
  const contract = "Full time"
  const labels = ["Frontend", "seniour", "html", "css" , "javascript"]
  const label = ["Frontend", "seniour"]
  const header =["NEW" , "FEATURED"]
  const heade =["NEW"]

  const cards =[
    {
      src: img,
      company:"Photosnap",
      header: header,
      position:"Senior Frontend Developer",
      days:"1day ago",
      contract:contract,
      location:"usa only",
      labels:labels
    },
    {
      src:img2,
      header:heade,
      company:"manager",
      position:"full-stack developer",
      contract:contract,
      labels:["label"]
    },
    {
      src:img3,
      header:["New","old"],
      company:"Developr",
      contract:"Part time",
      labels:["Html","css","javascript","react"]
    }
  ]


  return (
    <>
    <div className="app">
      {
        cards.map((card,idx)=>{
          return(
            <Card
              key={idx}
              src = {card.src}
              company = {card.company}
              header = {card.header}
              position ={card.position}
              days={card.days}
              contract ={card.contract}
              location = {card.location}
              labels={card.labels}
            />
          )
        })
      }
     
      {/* <Card
        src = {img3}
        company = "Photosnap"
        header = {header}
        position =" Senior Frontend Developer"
        contract={contract}
        labels={labels}
      /> */}
     </div>
    </>
  )
}

export default App
