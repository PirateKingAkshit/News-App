import React, { useEffect, useState } from 'react'
import {useSearchParams} from "react-router-dom"
import ArticleList from '../ArticleList/ArticleList';
import { FetchNewsApi } from '../../services/FetchNewsApi';
const NewsBody = () => {
  
  const [query] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const searchQuery = query.get('q');

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const articles = searchQuery ? await FetchNewsApi.fetchNewsApiByQuery(searchQuery) : await FetchNewsApi.fetchNewsApi();
      setLoading(false);
      setArticles(articles);
      
    }
    fetchArticles().catch(console.error)
  }, [searchQuery])
  
  return (
    <>
      {loading ? (
        <div className="bg-white dark:bg-slate-900 h-screen flex justify-center items-center ">
          <div className="text-white border-t-4 border-blue-500 dark:border-white rounded-full animate-spin h-20 w-20"></div>
        </div>
      ) : (
        <ArticleList articles={articles} />
      )}
    </>
  );
}

export default NewsBody