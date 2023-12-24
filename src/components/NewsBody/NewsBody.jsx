import React from 'react'
import ArticleList from '../ArticleList/ArticleList'

const NewsBody = () => {
  return (
    <div>NewsBody</div>
  )
}

export default NewsBody




// import React, { useEffect, useState } from 'react'
// import {useSearchParams} from "react-router-dom"
// import { FetchNewsApi } from '../../Service/FetchNewsApi';
// import ArticleList from '../ArticleList/ArticleList';
// const NewsBody = () => {
  
//   const [query] = useSearchParams();
//   const [loading, setLoading] = useState(true);
//   const [articles, setArticles] = useState([]);
//   const searchQuery = query.get('q');

//   useEffect(() => {
//     const fetchArticles = async () => {
//       setLoading(true);
//       const articles = searchQuery ? await FetchNewsApi.fetchNewsApiByQuery(searchQuery) : await FetchNewsApi.fetchNewsApi();
//       setLoading(false);
//       setArticles(articles);
      
//     }
//     fetchArticles().catch(console.error)
//   }, [searchQuery])
  
//   return (
//     <>
//       <div className="newsbody_container_parent">
//         {loading ? (
//           <h1>loading...</h1>
//         ) : (
//           articles.map((article) => {
//             return <ArticleList article={article} />
//           })
//         )}
//       </div>
//     </>
//   );
// }

// export default NewsBody