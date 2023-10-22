import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import PhotoListItem from "./PhotoListItem";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";

function PhotoList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handlePhotoAdd = () => {
    addPhoto(album);
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
    content = <div>Hata Var</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{album.title} Fotoları</h3>
          <Button variant="outlined" onClick={handlePhotoAdd}>
            {results.isLoading ? (
              <CircularProgress />
            ) : (
              <span> Foto Ekle+</span>
            )}
          </Button>
        </div>
      </div>
      <div className="fotoDiv">{content}</div>
    </>
  );
}

export default PhotoList;
