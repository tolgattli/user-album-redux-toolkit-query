import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import { Button, CircularProgress, Skeleton } from "@mui/material";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = (
      <>
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            height: "90px",
            borderRadius: "30px",
            marginBottom: "5px",
          }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            height: "90px",
            borderRadius: "30px",
            marginBottom: "5px",
          }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            height: "90px",
            borderRadius: "30px",
            marginBottom: "5px",
          }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            height: "90px",
            borderRadius: "30px",
            marginBottom: "5px",
          }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            height: "90px",
            borderRadius: "30px",
            marginBottom: "5px",
          }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            height: "90px",
            borderRadius: "30px",
            marginBottom: "5px",
          }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            height: "90px",
            borderRadius: "30px",
            marginBottom: "5px",
          }}
        ></Skeleton>
      </>
    );
  } else if (isError) {
    content = <div>Hata Var!!</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{user.name} Albümü</h3>
          <Button variant="outlined" color="success" onClick={handleAlbumAdd}>
            {results.isLoading ? <CircularProgress /> : <span>Albüm Ekle+</span>}
          </Button>
        </div>
      </div>
      <div>{content}</div>
    </>
  );
}

export default AlbumList;
