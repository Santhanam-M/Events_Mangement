import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Comment from './Components/Comment';
import Events from './Components/Events';
import Box from "@mui/material/Box";

const App = () =>{

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
    borderRadius : theme.spacing(2)
  }));
  
  return (
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={3}>
                <Item>
                  <Box textAlign="center">
                    <h2 style={{color : 'green'}}>Event Management</h2>
                  </Box>
                  <Events/> 
                  <Comment/>
                </Item>
            </Grid>
          </Grid>)

}

export default App