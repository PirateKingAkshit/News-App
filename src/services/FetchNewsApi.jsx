export const FetchNewsApi = {
  fetchNewsApi: async () => {
    const res = await fetch(
      "https://newsdata.io/api/1/news?apikey=pub_28539f380ffbd3ef255999e95239fde151782&language=en&q=india"
    );
    const results = await res.json();
    return results.results;
  },
  fetchNewsApiByQuery: async (query) => {
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_28539f380ffbd3ef255999e95239fde151782&q=${query}`
    );
    
    const results = await res.json();
    return results.results;
  },
};

// export const FetchNewsApi = {
//   fetchNewsApi: async () => {
//     const res = await fetch(
//       "https://newsapi.org/v2/everything?q=tesla&from=2023-11-24&sortBy=publishedAt&apiKey=14f983db36fd4f20a142b8c4b22c47cf"
//     );

//     const results = await res.json();
//     console.log(results)
//     return results.articles;
//   },
//   fetchNewsApiByQuery: async (query) => {
//     const res = await fetch(
//       `https://newsapi.org/v2/everything?q=${query}&from=2023-08-01&sortBy=publishedAt&apiKey=14f983db36fd4f20a142b8c4b22c47cf`
//     );
//     const results = await res.json();
//     return results.articles;
//   },
// };
