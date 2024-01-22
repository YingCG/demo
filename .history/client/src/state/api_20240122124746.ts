// api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from './types'
import { kpis, products, transactions } from "@/data/data.js";


export const api = createApi({
    //   baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"], // Add "Transactions" to tagTypes
    endpoints: (build) => ({
        getKpis: build.query<GetKpisResponse, void>({
            query: () => {
                console.log('kpis:', kpis);
                return kpis;
            },
            providesTags: ["Kpis"],
        }),
        getProducts: build.query<GetProductsResponse[], void>({
            query: () => products,
            providesTags: ["Products"],
        }),
        getTransactions: build.query<GetTransactionsResponse[], void>({
            query: () => transactions,
            providesTags: ["Transactions"],
        }),
    }),
    baseQuery: undefined
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;
// console.log('kpis:', kpis);
// console.log('products:', products);
// console.log('transactions:', transactions);