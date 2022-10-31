import "./RecipeNote.css";
import Button from "@mui/material/Button";

// text field
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// select
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// grid
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Input from "@mui/material/Input";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "pink",
  boxShadow: "none",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "4em",
}));

function RecipeNote() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      {" "}
      <h2>AAAAAAAA</h2>
      <Card
        className="RecipeNote"
        sx={{
          backgroundColor: "pink",
          margin: "2em",
          wordWrap: "break-word",
          textAlign: "left",
        }}
      >
        <CardContent>
          {/* <Box
            component="form"
            sx={{
              "& > :not(style)": { width: 0.9 },
              fontWeight: "bold",
              textAlign: "center",
              padding: "1em 0",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              // className="name"
              id="standard-basic"
              placeholder="Recipe name"
              // label="Recipe name"
              InputProps={{ style: { fontSize: 26 } }}
              variant="standard"
              multiline
            />
          </Box> */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 3, width: 0.9 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              InputProps={{ style: { fontSize: 26 } }}
              placeholder="Recipe name"
              variant="standard"
              multiline
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 3, width: 0.9 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              InputProps={{ style: { fontSize: 20 } }}
              placeholder="Description"
              variant="standard"
              multiline
            />
          </Box>
          <h2 style={{ marginLeft: "1em" }}>Ingredients</h2>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item sm={7}>
                <Item>
                  {" "}
                  <TextField
                    sx={{
                      width: 0.9,
                      margin: "1em",
                      // borderBottom: "3px solid green",
                      // textUnderline: "3px solid green",
                    }} //margin: "1em",
                    id="standard-textarea"
                    placeholder="Ingredient"
                    multiline
                    variant="standard"
                    InputProps={{ style: { fontSize: 20 } }}
                  />
                </Item>
              </Grid>
              <Grid item sm={3}>
                <Item>
                  {" "}
                  {/* <TextField
                    sx={{ margin: "1em" }}
                    type="number"
                    id="standard-textarea"
                    placeholder="Quantity"
                    multiline
                    variant="standard"
                    InputProps={{ style: { fontSize: 20 } }}
                  /> */}
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="Quantity"
                    sx={{
                      margin: "1em",
                      width: 0.9,
                    }}
                    // InputProps={{ style: { fontSize: 20 } }}
                    inputProps={{ style: { fontSize: 20 } }}
                  />
                </Item>
              </Grid>
              <Grid item sm={2}>
                <Item>
                  {" "}
                  <FormControl
                    variant="standard"
                    sx={{ minWidth: 80, margin: "1em" }} // m: "14px",
                  >
                    {/* <InputLabel id="demo-simple-select-standard-label">
                      Measurement
                    </InputLabel> */}
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Measure"
                      sx={{ fontSize: 20 }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>mg</MenuItem>
                      <MenuItem value={20}>g</MenuItem>
                      <MenuItem value={30}>kg</MenuItem>
                      <MenuItem value={40}>ml</MenuItem>
                      <MenuItem value={50}>L</MenuItem>
                    </Select>
                  </FormControl>
                </Item>
              </Grid>
            </Grid>
            <hr style={{ height: "5px", backgroundColor: "green" }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item sm={7}>
                <Item>
                  {" "}
                  <TextField
                    sx={{
                      width: 0.9,
                      margin: "1em",
                      // borderBottom: "3px solid green",
                      // textUnderline: "3px solid green",
                    }} //margin: "1em",
                    id="standard-textarea"
                    placeholder="Ingredient"
                    multiline
                    variant="standard"
                    InputProps={{ style: { fontSize: 20 } }}
                  />
                </Item>
              </Grid>
              <Grid item sm={3}>
                <Item>
                  {" "}
                  {/* <TextField
                    sx={{ margin: "1em" }}
                    type="number"
                    id="standard-textarea"
                    placeholder="Quantity"
                    multiline
                    variant="standard"
                    InputProps={{ style: { fontSize: 20 } }}
                  /> */}
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="Quantity"
                    sx={{
                      margin: "1em",
                      width: 0.9,
                    }}
                    // InputProps={{ style: { fontSize: 20 } }}
                    inputProps={{ style: { fontSize: 20 } }}
                  />
                </Item>
              </Grid>
              <Grid item sm={2}>
                <Item>
                  {" "}
                  <FormControl
                    variant="standard"
                    sx={{ minWidth: 80, margin: "1em" }} // m: "14px",
                  >
                    {/* <InputLabel id="demo-simple-select-standard-label">
                      Measurement
                    </InputLabel> */}
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Measure"
                      sx={{ fontSize: 20 }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>mg</MenuItem>
                      <MenuItem value={20}>g</MenuItem>
                      <MenuItem value={30}>kg</MenuItem>
                      <MenuItem value={40}>ml</MenuItem>
                      <MenuItem value={50}>L</MenuItem>
                    </Select>
                  </FormControl>
                </Item>
              </Grid>
            </Grid>
            <hr
              style={{ height: "5px", backgroundColor: "red", width: "40%" }}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default RecipeNote;
