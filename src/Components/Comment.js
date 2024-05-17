import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const Comment = () => {
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Number(new Date()),
      comments: comments,
    };
  };

  return (
    <div>
      <h4>Comments</h4>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="outlined-multiline-flexible"
          label="Write Comment"
          multiline
          size="small"
          value={comments}
          onChange={(e) => {
            setComments(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                type="submit"
                color="success"
                aria-label="send"
                size="small"
              >
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </form>
    </div>
  );
};

export default Comment;
