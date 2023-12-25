import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({ totalItems, onPageChange, currentPage, itemsPerPage, startIndex, lastIndex }) => {
    
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
    
    const noOfPages = () => {
      for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
        const pages = [];
        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
          pages.push(
            <div
              key={i}
              onClick={() => {
                onPageChange(i);
              }}
              aria-current={currentPage === i ? "page" : undefined}
              className={`relative z-10 inline-flex items-center border border-gray-300 dark:border-white  px-4 py-2 text-sm font-semibold text-black-50 dark:text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-indigo-600 cursor-pointer ${
                currentPage === i
                  ? " text-white bg-indigo-700 dark:bg-white dark:text-black "
                  : ""
              }`}
            >
              {i}
            </div>
          );
        }
        return pages;
      }
    };
  return (
    <>
      {totalItems > 0 && totalItems >lastIndex  ? (
        <>
          <div className="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-slate-900 px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-gray-700 dark:text-white hover:bg-blue-500 dark:hover:bg-gray-500 hover:text-white cursor-pointer"
              >
                Previous
              </button>
              <button
                disabled={currentPage === totalItems / itemsPerPage}
                onClick={() => onPageChange(currentPage + 1)}
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-gray-700 dark:text-white hover:bg-blue-500 dark:hover:bg-gray-500 hover:text-white cursor-pointer"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                
                    <p className="text-sm text-gray-700 dark:text-white">
                      Showing{" "}
                      <span className="font-medium">{startIndex + 1}</span> to{" "}
                      <span className="font-medium">{lastIndex}</span> of{" "}
                      <span className="font-medium">{totalItems}</span> results
                    </p>
                 
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>

                  {noOfPages()}
                  <button
                    disabled={currentPage === totalItems / itemsPerPage}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Pagination;
