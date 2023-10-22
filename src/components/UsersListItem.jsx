import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import { TiUserDelete } from "react-icons/ti";
import { Button } from "@mui/material";
import { useRemoveUserMutation } from "../store";
import { CircularProgress } from "@mui/material";

function UsersListItem({ user }) {
  const [removeUser, results] = useRemoveUserMutation();
  const header = (
    <>
      <Button
        size="large"
        sx={{ fontSize: 25, cursor: "pointer" }}
        onClick={() => {
          removeUser(user);
        }}
      >
        {results.isLoading ? <CircularProgress color="secondary" sx={{width:'20px',height:'20px'}}/> : <TiUserDelete />}
      </Button>
      {user.name}
    </>
  );
  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
}

export default UsersListItem;
