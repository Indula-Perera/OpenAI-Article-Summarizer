import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      length: '3'
    },
    headers: {
      'X-RapidAPI-Key': '0c41890d51msh8ff9c81e91b0c3fp141796jsn159e1facfb19',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers) =>{
            headers.set('X-RapidAPI-Key','KEY');
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.comarticle-extractor-and-summarizer.p.rapidapi.com');
        }
    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
            query:(params)=>`test`
        })
    })
})