import Cities from "./Components/Cities"
import Footer from "./Components/Footer"

import HomePage from "./Components/HomePage"
import Navbar from "./Components/Navbar"
import Properties from "./Components/Properties"
// import Real from "./Components/Real"
import Work from "./Components/Work"





function App() {

  const nav=[
    'Home','About','Agent','Services','Properties','Blog','Contact'
  ]

  const hom=[
    {
      
      ttl:"Find Perfect ",
      ttl2:"House From Your Area.",
      ttl1:"From as low as $20 A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cont:"View All Propeties"
                        
    }
  ]

  const Property=[
    {
      h11:'_______WHAT WE OFFER___________',
      h22:'Featured Properties',
      img1:'/images/illustration/work-4.jpg',
      img2:'/images/illustration/work-2.jpg',
      img3:'/images/illustration/work-3.jpg',
      img4:'/images/illustration/work-5.jpg',
      p1:'3 2 1,878sqft',
      p11:'The Blue Sky Home',
      p111:'Oakland'

    }
  ]
 
  const citi=[
    {
      h11:'_______Properties_______',
      h22:'Properties for this Cities',
      img1:'/images/illustration/place-1.jpg',
      img2:'/images/illustration/place-2.jpg',
      img3:'/images/illustration/place-4.jpg'
    }
  ]

  const wor=[
    {
      h11:'_______Work flow_______',
      h22:'How it works',
      img1:'/images/illustration/blob.svg',
      h66:'Evaluate Property',
      h61:'Meet Your Agent',
      h62:'Close the Deal',
      h63:'Have Your Property',
      ppp:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    }
  ]

  // const real=[
  //   {
  //     head:'Ecoverde Real Estate',
  //     title:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  //     title2:

  //             'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.',

         
  //     img1:'../src/images/illustration/about.jpg',
  //     img2:'../src/images/illustration/about-2.jpg'

  //   }
  // ]
  const foot=[
    {
      h11:'Copyright ©2024 All rights reserved | This template is made with  by  '
    }
  ]
  

  return (
    <>
      <Navbar navi={nav}/>
      <HomePage homi={hom}/>
      <Properties prod={Property}/>
      <Cities  city={citi}/>
      <Work workflow={wor}/>
      {/* <Real realstate={real}/> */}
      <Footer foote={foot}/>
      
      
      
     
      
    </>
  )
}

export default App
