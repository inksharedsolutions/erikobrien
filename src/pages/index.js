import React, {useState, useEffect, useRef} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Main from "../components/main"


const IndexPage = () => {
  const [sliderState, _pS] = useState();
  const bodyRef = useRef(null);


  useEffect(()=>{


  },[sliderState, bodyRef])

  const bGround = ()=>{
      if( sliderState === 1){
          return {background : 'radial-gradient(50% 50% at 50% 50%, rgb(53, 27, 4) 0%, rgb(19 13 2) 100%)'}
      }else if ( sliderState === 2){
          return {background : 'radial-gradient(50% 50% at 50% 50%, rgb(35 47 43) 0%, rgb(20, 28, 34) 100%)'}
      }
  }

  return(
    <main className="body-wrapper" style={bGround()}>
      <Layout>
          <Main childActive={(item)=>_pS(item) }/>
      </Layout>
    </main>
  )
}

export default IndexPage
