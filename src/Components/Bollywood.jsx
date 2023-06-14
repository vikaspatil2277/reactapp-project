import React from "react";
import { useContext } from "react";
import AdBox from "./AdBox";
import "./css/Bollywood.css";
import { store } from "./Details";
import ResusableArticle from "./ResuseableComponents/ReusableArticle";

const Bollywood = () => {
const [context]= useContext(store)
  return (
    <>
      <div>
        <h1 className="story-title">Bollywood</h1>
        <hr className="story-hr" />
        <div className="bolly-post">
          <div className="left">
          {
          context.filter((data)=>{
           return data.category === 'Bollywood'
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
            <AdBox/>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Bollywood;
