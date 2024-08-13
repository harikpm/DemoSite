import React, { useState } from "react";
import * as Mui from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Community");
  const [sidebar, setSidebar] = useState<string>("Los Angeles");

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };
  const handleMenusClick = (menu: string) => {
    setSidebar(menu);
  };

  const menuItems = [
    { name: "Dashboard" },
    { name: "Community" },
    { name: "Jobs" },
    { name: "Documents" },
  ];
  const sidebarData = [
    {
      icon: <PeopleOutlineOutlinedIcon />,
      text: "You & Friends",
    },
    {
      icon: <LocationOnIcon />,
      text: "Los Angeles",
    },
    {
      icon: <PublicIcon />,
      text: "Public",
    },
    {
      icon: <ExpandMoreIcon />,
      text: "More",
    },
    {
      icon: <PhotoLibraryOutlinedIcon />,
      text: "Photos",
    },
    {
      icon: <VideocamOutlinedIcon />,
      text: "Videos",
    },
    {
      icon: <SearchOutlinedIcon />,
      text: "Search",
    },
    {
      icon: <ZoomInOutlinedIcon />,
      text: "Invite Friends",
    },
  ];

  return (
    <>
      <Mui.Grid container spacing={0} className="Commoncolor">
        <Mui.Grid item xs={12}>
          <Mui.Card sx={{ height: "8.5vh" }}>
            <Mui.Grid
              container
              spacing={0}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Mui.Grid item xs={2.5}></Mui.Grid>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Mui.Grid
                    item
                    xs={0.7}
                    sx={{
                      height: "9vh",
                      cursor: "pointer",
                      backgroundColor:
                        selectedMenu === item.name ? "#55ADDD" : "transparent",
                      color: selectedMenu === item.name ? "white" : "black",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                    className="hoverEffect"
                    onClick={() => handleMenuClick("Community")}
                  >
                    <Mui.Typography
                      mt={3.5}
                      sx={{
                        color: "inherit",
                        alignItems: "center",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.name}
                    </Mui.Typography>
                  </Mui.Grid>
                  {index < menuItems.length - 1 && (
                    <Mui.Divider
                      orientation="vertical"
                      flexItem
                      sx={{ mx: 1, height: "2vh", mt: 3.5 }}
                    />
                  )}
                </React.Fragment>
              ))}
              <Mui.Grid item xs={5.3} sx={{ mt: 3.5 }}></Mui.Grid>
              <Mui.Grid item sx={{ mt: 2.1 }}>
                <Mui.Avatar sx={{ bgcolor: "orangered" }}>H</Mui.Avatar>
              </Mui.Grid>
              <Mui.Grid item sx={{ mt: 3 }}>
                <ArrowDropDownOutlinedIcon />
              </Mui.Grid>
              <Mui.Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 1, height: "4.5vh", mt: 2.5 }}
              />
              <Mui.Grid item sx={{ mt: 3 }}>
                <LightModeOutlinedIcon />
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Card>
        </Mui.Grid>

        <Mui.Grid
          item
          xs={2.5}
          sx={{
            backgroundColor: "#F4F8FB",
            display: "flex",
            flexDirection: "column",
            height: "94.1vh",
            mt: 1,
          }}
        >
          <div className="textcommoncolor">COMMUNITY:CITY</div>
          <Mui.Grid item xs={12} mt={2}>
            {sidebarData.map((item, index) => (
              <Mui.Grid
                item
                xs={12}
                key={index}
                sx={{
                  mb: 2,
                  height: "5vh",
                  cursor: "pointer",
                  backgroundColor:
                    sidebar === item.text ? "#55ADDD" : "transparent",
                  color: sidebar === item.text ? "white" : "#7A8285",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    color: "white",
                  },
                }}
                className="hoverEffect"
                onClick={() => handleMenusClick("Los Angeles")}
              >
                <Mui.Typography
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                  <Mui.Box component="span" sx={{ ml: 1 }}>
                    {item.text}
                  </Mui.Box>
                </Mui.Typography>
              </Mui.Grid>
            ))}
          </Mui.Grid>
        </Mui.Grid>

        {children}
      </Mui.Grid>
    </>
  );
};

export default Layout;
