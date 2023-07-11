import React,{useContext} from 'react'
import HeroSection from './Components/HeroSection'
// import { AppContext } from './Context/Productcontext'
import { useProductContext } from './Context/Productcontex'
const About = () => {
  const {myName}= useProductContext();
  // const {myPapa}= useContext(AppContext)
  const data={
    name:"FootShop About"
}
  return (<>
  {myName}
  {/* {myPapa} */}
    <HeroSection myData={data}/>
    </>
  )
}


export default About