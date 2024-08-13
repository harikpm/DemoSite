import { Dashboard } from "@/components/Dashboard/dashboard";
import * as Mui from "@mui/material";
export default function Home() {
  return (
    <>
      <Mui.Grid>
        <Mui.Grid sx={{ mt: 3, ml: 20, color: "#7A8285", fontSize: "20px" }}>
          Update Status
          <div style={{ marginTop: "15px" }}>
            <Mui.Divider />
          </div>
        </Mui.Grid>
        <Mui.Grid sx={{ ml: 3, mt: 2 }}>
          <Dashboard />
        </Mui.Grid>
      </Mui.Grid>
    </>
  );
}
