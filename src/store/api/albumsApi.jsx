import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    fetchFn: async (...args) => {
      await pause(140);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/albums",
            method: "GET",
            params: {
              userId: user.id,
            },
          };
        },
      }),
      addAlbum: builder.mutation({
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      removeAlbum: builder.mutation({
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
            body: {
              name: "Can",
              id: 31,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } =
  albumsApi;

export { albumsApi };

// veri çekerken builder.query silerken : builder.mutation
