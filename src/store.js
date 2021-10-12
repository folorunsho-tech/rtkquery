import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'

import { postApi } from "./services/posts";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
