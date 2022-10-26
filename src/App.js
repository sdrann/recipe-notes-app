import "./App.css";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "yellow",
  boxShadow: "none",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "4em",
}));

function App() {
  const [unit, setUnit] = React.useState("");

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <div className="App">
      <h1>App</h1>
      <Button variant="contained">Hello World</Button>

      {/* <Box
        sx={{
          width: 700,
          height: 700,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          margin: "2em auto",
        }}
      ></Box> */}

      <Card
        sx={{
          backgroundColor: "yellow",
          margin: "2em",
          wordWrap: "break-word",
        }}
      >
        <CardContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              margin: "2em",
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                sx={{ maxWidth: "9em", margin: "auto 1em" }}
                id="standard-textarea"
                label="Recipe"
                placeholder="Recipe description"
                multiline
                variant="standard"
              />
            </div>
          </Box>

          {/* grid */}
          <Box sx={{ flexGrow: 1, margin: "1em", wordWrap: "break-word" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <Item>
                  <div>
                    <TextField
                      sx={{ maxWidth: "8em", margin: "auto 1em" }}
                      id="standard-textarea"
                      placeholder="Ingredient"
                      multiline
                      variant="standard"
                    />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Item>
                  <Box sx={{ maxWidth: "8em", margin: "auto" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Measure
                      </InputLabel>
                      <Select
                        sx={{ height: "3em" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={unit}
                        label="Measure"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>kg</MenuItem>
                        <MenuItem value={20}>g</MenuItem>
                        <MenuItem value={30}>mg</MenuItem>
                        <MenuItem value={30}>L</MenuItem>
                        <MenuItem value={30}>ml</MenuItem>
                        <MenuItem value={30}>oz</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>xs=4</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>xs=8</Item>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
