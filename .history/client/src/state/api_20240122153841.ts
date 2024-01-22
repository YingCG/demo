// api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from '@/state/types'
import { kpis } from "@/data/kpis.js";
import { products } from "@/data/products.js";
import { transactions } from "@/data/transactions.js";


export const api = createApi({
    //   baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"], // Add "Transactions" to tagTypes
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>(
            {
            query: () => kpis,
            providesTags: ["Kpis"],
                        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => products,
            providesTags: ["Products"],
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => transactions,
            providesTags: ["Transactions"],
        }),
    }),
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/" }),

});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;

console.log('kpis:', kpis);
console.log('products:', products);
console.log('transactions:', transactions);