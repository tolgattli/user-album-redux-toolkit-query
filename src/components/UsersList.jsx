import React from "react";
import { useAddUserMutation, useFetchUsersQuery } from "../store";
import { CircularProgress, Skeleton } from "@mui/material";
import UsersListItem from "./UsersListItem";
import { Button } from "@mui/material";

function UsersList() {
  const [addUser, results] = useAddUserMutation();
  const handleUserAdd = () => {
    addUser();
  };

  const { data, isError, isFetching } = useFetchUsersQuery();

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
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="topArrangement">
        <h1 style={{ fontSize: "20px" }}>Kişiler</h1>
        <Button variant="outlined" onClick={handleUserAdd}>
          {results.isLoading ? <CircularProgress /> : <span>Kişi Ekle+</span>}
        </Button>
      </div>

      {content}
    </div>
  );
}

export default UsersList;
