import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `https://dashboard-neon-three-56.vercel.app//general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "https://dashboard-neon-three-56.vercel.app//client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "https://dashboard-neon-three-56.vercel.app//client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "https://dashboard-neon-three-56.vercel.app//client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "https://dashboard-neon-three-56.vercel.app//client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "https://dashboard-neon-three-56.vercel.app//sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "https://dashboard-neon-three-56.vercel.app//management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `https://dashboard-neon-three-56.vercel.app//management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "https://dashboard-neon-three-56.vercel.app//general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
