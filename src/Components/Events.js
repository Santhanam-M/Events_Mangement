import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Box from "@mui/material/Box";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const Events = () => {
  const [event, setEvent] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [selectedUser, setSelectedUser] = useState('')

  const users = [{id : 1, name : 'jack', comment:[], logo : '' },
  {id : 2, name : 'smith', comment:[], logo : '' },
  {id : 3, name : 'john', comment:[], logo : '' },
]

  return (
    <div>
      <form>

        {/* Event Title  */}
        <TextField
          fullWidth
          id="outlined-multiline-flexible"
          multiline
          size="small"
          value={event}
          InputProps={{
            style: { color: 'green', fontWeight : 'bold', fontSize : '18px' },
          }}       
          onChange={(e) => {
            setEvent(e.target.value);
          }}
        />

        {/* Date and Time */}
        <TextField
          fullWidth
          id="datetime-local"
          label="Date and Time"
          type="datetime-local"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mt: 3 }} // Add margin top
          value={dateTime}
          onChange={(e) => {
            setDateTime(e.target.value);
          }}
        />

        {/* Assign the event */}
        <Box sx={{display : 'flex'}}>
            <Person2OutlinedIcon
                style={{color: 'green', marginTop : '14px'}}
            /> 
            <h4 style={{marginLeft : '4px'}}>Assign to:</h4>
        </Box>
       
        <Select
            fullWidth
            size="small"
            value={selectedUser}
        >
            {users.map((ele)=>{
                return <MenuItem key={ele.id}>{ele.name}</MenuItem>
            })}
        </Select>

        {/* Adding Note */}
        <Box sx={{display : 'flex'}}>
            <DescriptionOutlinedIcon
               style={{color: 'green', marginTop : '14px'}}
            />
            <h4 style={{marginLeft : '4px'}}>Note:</h4>
        </Box>

        <TextField
            fullWidth
            id="outlined-multiline-flexible"
            multiline
            size="small" 
        />

      </form>
    </div>
  );
};

export default Events;
