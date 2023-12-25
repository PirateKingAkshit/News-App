// import React, { useEffect, useState } from 'react'

// const ArticleList = ({ articles }) => {
//   const savedTheme = localStorage.getItem("theme");
//   const [theme, setTheme] = useState(savedTheme || "light");
  
//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <div className="bg-white dark:bg-slate-900">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {articles.length === 0 || articles.status === "error" ? (
//               <p className="text-lg text-gray-600 w-screen h-96  dark:text-white text-center">
//                 No articles found
//               </p>
//           ) : (
//             articles.map((article) => (
//               <div
//                 key={article.article_id}
//                 className="group"
//                 onClick={() => {
//                   window.open(article.link);
//                 }}
//               >
//                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//                   <img
//                     src={article.image_url}
//                     className="h-full w-full object-cover object-center group-hover:opacity-75"
//                   />
//                 </div>
//                 <h3 className="mt-4 text-sm text-gray-700 dark:text-white">
//                   {article.title}
//                 </h3>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleList


import React, { useEffect, useState } from "react";

const ArticleList = ({ articles }) => {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {articles.length === 0 || articles.status === "error" ? (
            <p className="text-lg text-gray-600 w-screen h-96  dark:text-white text-center">
              No articles found
            </p>
          ) : (
            articles.map((article) => (
              <div
                // key={article.title}
                className="group"
                onClick={() => {
                  window.open(article.url);
                }}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={article.urlToImage}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 dark:text-white">
                  {article.title}
                </h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
