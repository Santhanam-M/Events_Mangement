import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Comment from './Components/Comment';

const App = () =>{

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    borderRadius : theme.spacing(2)
  }));
  
  return (
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={3}>
                <Item>
                  <Comment/>
                </Item>
            </Grid>
          </Grid>)

}

export default App