import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotoList";
import { TbHttpDelete } from "react-icons/tb";
import { Button, CircularProgress } from "@mui/material";
import { useRemoveAlbumMutation } from "../store";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const header = (
    <>
      <Button
        size="large"
        sx={{ fontSize: 25, cursor: "pointer" }}
        onClick={() => {
          removeAlbum(album);
        }}
      >
        {results.isLoading ? (
          <CircularProgress
            color="secondary"
            sx={{ width: "20px", height: "20px" }}
          />
        ) : (
          <TbHttpDelete />
        )}
      </Button>
      {album.title}
    </>
  );
  return (
    <div>
      <ExpandablePanel header={header}>
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  );
}

export default AlbumListItem;
