import React from 'react'
import { useContext } from 'react'
import AdBox from './AdBox'
import { store } from './Details'
import ResusableArticle from './ResuseableComponents/ReusableArticle'
import './css/Fitness.css'

const Fitness = () => {
  const [context] = useContext(store)
  return (
    <>
     <h1 className="story-title">Fitness</h1>
      <hr className="story-hr" />
      <div className="fitness-article">
        <div className="left">
          {
            context.filter((data)=>{
              return data.category === 'Fitness'
            }).map((item)=>{
              return(
                <ResusableArticle
              key={item.id}
              articleid={item.id}
              imgUrl={item.img}
              description={item.description.slice(0,400)}
              title={item.title}
              />
              )
            })
          }
        </div>
        <div className="right">
          <AdBox/>
          <br />
          <AdBox/>
        </div>
      </div>

    </>
  )
}

export default Fitness