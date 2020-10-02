import React from "react";

import { Button, Input, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available",
      margin: "10px 15px 0",
    },
    display: "inline-block",
  },
}));

const Search: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchWrapper}>
      <Input
        inputProps={{
          placeholder: "Search",
        }}
      />
      <Button>
        <Search />
      </Button>
    </div>
  );
};

export default Search;
