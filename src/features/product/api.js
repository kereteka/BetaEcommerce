import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const sessionId = sessionStorage.getItem("sessionId") || "";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/",

    headers: { "Session-ID": sessionId },
  }),
  endpoints: (builder) => ({
    listProduct: builder.query({
      query: (searchTerm) =>
        searchTerm !== "" ? `search?name=${searchTerm}` : "products",
      transformResponse: (response) => response,
    }),
    addToCart: builder.mutation({
      query: (productId) => ({
        url: `add-to-cart?id=${productId}`,
        method: "POST",
      }),
    }),
    viewCart: builder.query({
      query: () => "view-cart",
      transformResponse: (response) => response,
    }),
    subtractFromCart: builder.mutation({
      query: (productId) => ({
        url: `subtract-from-cart?id=${productId}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useListProductQuery,
  // useSearchProductQuery,
  useAddToCartMutation,
  useViewCartQuery,
  useSubtractFromCartMutation,
} = api;
