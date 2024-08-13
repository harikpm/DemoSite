import * as Mui from "@mui/material";
import React from "react";
import profile from "@/Assets/profile.jpg";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
export function Dashboard() {
  return (
    <>
      <Mui.Grid
        container
        spacing={2}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Mui.Grid item xs={1}>
          <img
            src={profile.src}
            alt="Profile"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Mui.Grid>
        <Mui.Grid item xs={8}>
          <Mui.Card sx={{ width: "1060px", height: "120px" }}>
            <Mui.TextField
              placeholder="Harmonious finder grid system retina animation compressor experience keynote."
              sx={{ width: "1060px" }}
              variant="outlined"
              InputProps={{
                disableUnderline: true,
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },
              }}
            />
            <Mui.Grid
              container
              spacing={0}
              item
              xs={12}
              sx={{
                backgroundColor: "#edf1f2",
                mt: 2,
                height: "50px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Mui.Grid item xs={0.5} mt={1.5} ml={2}>
                <LocationOnIcon sx={{ color: "#B7C5CE" }} />
              </Mui.Grid>
              <Mui.Grid item xs={0.5} mt={1.5}>
                <PhotoLibraryOutlinedIcon sx={{ color: "#B7C5CE" }} />
              </Mui.Grid>
              <Mui.Grid item xs={10} mt={1.5}>
                <VideocamOutlinedIcon sx={{ color: "#B7C5CE" }} />
              </Mui.Grid>
              <Mui.Grid item xs={0.8} sx={{backgroundColor:'red', textAlign:'center'}} >
                <HistoryEduIcon sx={{color:'white'}} />
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Card>
        </Mui.Grid>
      </Mui.Grid>
     {/* ---------------------------------------------- */}
     <Mui.Grid>
      heyy
     </Mui.Grid>
    </>
  );
}
