// import { configureStore } from '@reduxjs/toolkit'
// import { apiSlice } from './api/api'

// export const store = configureStore({
//   reducer: {[apiSlice.reducerPath]: apiSlice.reducer},

//   //! middleware
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware().concat(api.middleware),
// })

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;

// // export default store;

// // Infer the `RootState` and `AppDispatch` types from the store itself
// // export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// // export type AppDispatch = typeof store.dispatch