import './App.css';
import axios from 'axios';
import NavInshort from './Conponent/NavInshort';
import { useState, useEffect } from 'react';
import NewsContent from "./Conponent/NewsContent";
// import apikey from './data/config';
import Footer from './Conponent/Footer'
function App() {

  const [category, setCategory] = useState('general');
const [newsArray, setnewsArray] = useState([]);
const [newsResult, setnewsResult] = useState();
const [loadMore, setLoadMore] = useState();
  const newsApi = async () =>{
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com"
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=37b2020807a04dfba1e17eaa597414ec&category=${category}&pageSize=${loadMore}`) 
setnewsArray(news.data.articles)
setnewsResult(news.data.totalResults)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(newsArray)
useEffect(() => {
  newsApi();// eslint-disable-next-line
 
}, [newsResult, category, loadMore]); 
  return (
  <>
<NavInshort setCategory={setCategory}/>

<NewsContent setLoadMore={setLoadMore} loadMore={loadMore} newsArray={newsArray} newsResult={newsResult}/>

<Footer/>
  </>
  );
}

export default App;
