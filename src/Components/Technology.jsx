import React from "react";
import { useContext } from "react";
import { store } from "./Details";
import "./css/Technology.css";
import ResusableArticle from "./ResuseableComponents/ReusableArticle";
import AdBox from "./AdBox";

const Technology = () => {
  const [detail] = useContext(store);

  return (
    <>
      <h1 className="story-title">Technology</h1>
      <hr className="story-hr" />
      <div className="tech-article">
        <div className="left">
          {detail
            .filter((article) => {
              return article.category === "Technology";
            })
            .map((item) => {
              return (
                <ResusableArticle
                  key={item.id}
                  articleid={item.id}
                  imgUrl={item.img}
                  description={item.description.slice(0,300)}
                  title={item.title}
                />
              );
            })
            }
        </div>
        <div className="right">
          <AdBox />
          <br />
          <AdBox />
        </div>
      </div>
    </>
  );
};

export default Technology;
