import React from "react";
import { Fab } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

function CustomFab({ direction = "right", onClick }) {
  return (
    <Fab 
          color="#6C92E3" 
          aria-label="nextPage" 
          style={{marginTop: 300,marginLeft:20}} 
          sx={{
            backgroundColor: "#6C92E3", // Change to your desired color
            "&:hover": { backgroundColor: "#3970e8" }, // Change hover color
            color: "black", // Icon color
              }}>
          
      {direction === "right" ? <ChevronRight sx={{fontSize:50}}/> : <ChevronRight sx={{ transform: "rotate(180deg)",fontSize:50 }} />}
    </Fab>
  );
}

export default CustomFab;
