import React, { useContext } from 'react'
import AdBox from './AdBox'
import { store } from './Details'
import './css/Food.css'
import ResusableArticle from './ResuseableComponents/ReusableArticle'

const Food = () => {
  const [context] = useContext(store)
  return (
    <>
       <h1 className="story-title">Food</h1>
      <hr className="story-hr" />
      <div className="food-article">
        <div className="left">
          {
            context.filter((data)=>{
              return data.category === 'Food'
            }).map((item)=>{
              return(
                <ResusableArticle
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                description={item.description.slice(0,300)}
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

export default Food