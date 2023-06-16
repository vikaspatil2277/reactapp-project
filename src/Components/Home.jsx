import React from "react";
import { useContext } from "react";
import "./css/Home.css";
import AdBox from "./AdBox";
import { store } from "./Details";
import ResusableArticle from "./ResuseableComponents/ReusableArticle";
import CardHome from "./ResuseableComponents/CardHome";
import ReusableLatest from "./ResuseableComponents/ReusableLatest";
import { Link } from "react-router-dom";

const Home = () => {
  const [detail] = useContext(store);
  console.log(detail);
  return (
    <>
      <div className="grid-box">
        <div className="g1">
         
          <Link to="/Tech">
            {" "}
            <img
              src={
                "https://theforage.wpengine.com/wp-content/uploads/2022/09/tech-companies-1536x1024.jpg"
              }
              alt="not found"
              className="big-img"
            />
          </Link>
        </div>
        <div className="g2-g3">
        <div className="g2">
         
          <Link to="/fitness">
            {" "}
            <img
              src={
                "https://images.indianexpress.com/2020/04/headstand-1200.jpg"
              }
              alt="not found" className="g2-img"
            />
          </Link>
        </div>
        <div className="g3">
         
          <Link to="/Food">
            {" "}
            <img
              src={
                "https://media.istockphoto.com/photos/biryani-picture-id1305452646?b=1&k=20&m=1305452646&s=170667a&w=0&h=1M4qIQor9-oTbDFc8osB9TKQEEMBn7j_4D1Qy7hRdNk="
              }
              alt="not found" className="g3-img"
            />
          </Link>
          </div>
        </div>
      </div>

      <h1 className="story-title">The Latest </h1>
      <hr className="story-hr" />

      <div className="top-container">
        <div>
          {detail
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((item) => (
              <ReusableLatest
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 100)}
                author={item.author}
              />
            ))}
        </div>
        <div>
          {detail
            .filter((article) => {
              return article.category === "technology";
            })
            .map((item) => (
              <ReusableLatest
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title.slice(0, 35)}
                description={item.description.slice(0, 100)}
                author={item.author}
              />
            ))}
        </div>

        <div>
          {detail
            .filter((article) => {
              return article.category === "food";
            })
            .map((item) => (
              <ReusableLatest
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title.slice(0, 50)}
                description={item.description.slice(0, 100)}
                author={item.author}
              />
            ))}
        </div>
      </div>

      <h1 className="story-title">Latest Articles</h1>
      <hr className="story-hr" />

      <div className="latest-article">
        <div className="left-article">
          {detail
            .filter((article) => {
              return article.category === "mix";
            })
            .map((item) => (
              <ResusableArticle

                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                
                title={item.title.slice(0, 50)}
                description={item.description.slice(0, 50)}
                author={item.author}
              />
              
              
            ))}
            
        </div>
        <div className="right-article">
          <AdBox />
        </div>
      </div>

      <h1 className="story-title">Latest Stories</h1>
      <hr className="story-hr" />
      <div className="footer-post">
        <div>
          {detail
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 100)}
                author={n.author}
              />
            ))}
        </div>
        <div>
          {detail
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 100)}
                author={n.author}
              />
            ))}
        </div>
        <div>
          {detail
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 101)}
                author={n.author}
              />
            ))}
        </div>
      </div>
      <hr />
      
    </>
  );
};

export default Home;
