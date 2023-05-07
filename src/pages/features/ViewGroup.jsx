import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "./Header";
import UserApi from "../../api/UserApi";
import { useEffect } from "react";
import { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [rows, setRows] = useState([]);
  const [token, setToken] = useState("");

  const getAll = async () => {
    try {
      const response = await UserApi.getAllGroups();
      setRows(response.data.content);
    } catch (error) {
      console.error();
    }
  };
  useEffect(() => {
    getAll();
    setToken(localStorage.getItem("token"));
  }, []);
  console.log(rows);

  return (
    <>
      <Header />
      {token ? (
        <TableContainer component={Paper} style={{ marginTop: "68px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">ID</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Total Member</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="right">{row.id}</StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.totalMember}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <MDBBtn style={{marginTop:"100px"}} className="bg-warning">
            You need login
          </MDBBtn>
        </>
      )}
    </>
  );
}
