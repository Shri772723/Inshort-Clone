import React from 'react'
import './NewsCard.css'
const NewsCard = ({newsItem}) => {
    // console.log(newsItem)
    const fullDate = new Date (newsItem.publishedAt);
    var date = fullDate.toString().split(" ")
    const hour = parseInt(date[4].substring(0,2));
    const time = hour=>12?true :false 
  return (
    <>
      <div className="newscard">
        <img className='cardimg'  alt={newsItem.title}  src={newsItem.urlToImage
        ?newsItem.urlToImage
        :'https://www.jaipuriaschoolballia.in/wp-content/uploads/2016/11/blank-img.jpg'} 
        />

        <div className="newstext">
            <span className="title">{newsItem.title}</span><br />
            <span className="author"><a href={newsItem.url} target='_blank'><b>Short</b></a> <span className='muted'>by {newsItem.author ? newsItem.author : 'Unknown' } / {time ? `${hour-12}:${date[4].substring(3,5)}pm` : `${hour}:${date[4].substring(3,5)}am`} on {date[2]} {date[1]} {date[3]} , {date[0]}</span></span>
            <div className="newstextlower">
            <div className='description'>
                {newsItem.description}
            </div>
            <span className='readmore'>Read More at <span className='source'>{newsItem.source.name}</span></span>
            </div>
        </div>
      </div>
    </>
  )
}

export default NewsCard
