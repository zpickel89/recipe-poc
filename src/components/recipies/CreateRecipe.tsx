import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import React from "react";

export const CreateRecipe = () => {
  return (
    <>
      <Card>
        <CardContent>
          <TextField label="Name" variant="outlined"></TextField>
        </CardContent>
        <CardActions>
          <Button variant="contained">Create</Button>
        </CardActions>
      </Card>
    </>
  );
};
