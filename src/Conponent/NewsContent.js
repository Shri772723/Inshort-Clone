import { Container } from "@mui/system";
import React from "react";
import "./NewsContent.css";
import NewsCard from "./NewsCard";

const NewsContent = ({ newsResult, newsArray, loadMore, setLoadMore}) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadmsg">
          <span className="downloadtext">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt=""
          />
          <img
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt=""
          />
        </div>
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

       

        {
            loadMore <= newsResult &&
            (
                <>
                <hr />
                <button className="loadmore" onClick={()=> setLoadMore(loadMore + 20)}>Load More</button>

                </>
            )
        }
      </div>
    </Container>
  );
};

export default NewsContent;
