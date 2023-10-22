import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersApi } from "./api/usersApi";
import { albumsApi } from "./api/albumsApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useAddAlbumMutation,
  useFetchAlbumsQuery,
  useRemoveAlbumMutation,
} from "./api/albumsApi";

export {
  useFetchUsersQuery,
  useAddUserMutation,
  useRemoveUserMutation,
} from "./api/usersApi";
