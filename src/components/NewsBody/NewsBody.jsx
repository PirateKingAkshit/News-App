import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleList from "../ArticleList/ArticleList";
import { FetchNewsApi } from "../../services/FetchNewsApi";
import Pagination from "../Pagination/Pagination";

const itemsPerPage = 12;

const NewsBody = () => {
  const [query] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const searchQuery = query.get("q");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const fetchedArticles = searchQuery
          ? await FetchNewsApi.fetchNewsApiByQuery(searchQuery)
          : await FetchNewsApi.fetchNewsApi();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [searchQuery]);

   

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const currentArticles = Array.isArray(articles) ? articles.slice(startIndex, lastIndex) : [];

  return (
    <>
      {loading ? (
        <div className="bg-white dark:bg-slate-900 h-screen flex justify-center items-center ">
          <div className="text-white border-t-4 border-blue-500 dark:border-white rounded-full animate-spin h-20 w-20"></div>
        </div>
      ) : (
        <>
          <ArticleList articles={currentArticles} />
          <Pagination
            totalItems={articles.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            startIndex={startIndex}
            lastIndex={lastIndex}
          />
        </>
      )}
    </>
  );
};

export default NewsBody;
