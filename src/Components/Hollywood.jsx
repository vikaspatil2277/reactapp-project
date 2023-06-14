import React, { useContext } from 'react'
import { store } from './Details'
import './css/Hollywood.css'
import ResusableArticle from './ResuseableComponents/ReusableArticle'
import AdBox from './AdBox'

const Hollywood = () => {
  const [context] = useContext(store)
  return (
    <>
        <h1 className="story-title">Hollywood</h1>
        <hr className="story-hr" />
        <div className="holly-post">
          <div className='left'>
            {
              context.filter((data)=>{
               return data.category === 'Hollywood'
              }).map((item)=>{
                return(
                  <ResusableArticle
                  key={item.id}
                  articleid={item.id}
                  imgUrl={item.img}
                  description={item.description.slice(0, 300)}
                  title={item.title}
                  />
                  
                )
              })
              
            }
           
          </div>
          <div className="right">
              <AdBox/>
              <AdBox/>
          </div>
        </div>
    </>
  )
}

export default Hollywood