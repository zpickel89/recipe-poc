import { Card, CardContent, CardActions, Button, Paper } from "@mui/material";
import React from "react";
import { IngredientsEdit } from "../shared/IngredientsEdit";

export const CreateRecipe = () => {
  return (
    <>
      <Card>
        <CardContent>
          <div style={{ display: "flex" }}>
            <Paper>
              <p>picture here</p>
            </Paper>
            <div>
              <IngredientsEdit></IngredientsEdit>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained">Create</Button>
        </CardActions>
      </Card>
    </>
  );
};
