
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
const columns = [
  { id: 'patientId', label: 'PatientId', minWidth: 100 },
  { id: 'patientName', label: "Patient Name", min: 100 },
  { id: 'encounterDate', label: 'Encounter Date', minWidth: 140 },
  { id: 'chiefComplaint', label: "Chief Complaint", min: 100 }
];

function createData(patientId, name, age, gender, currentMedications) {
  return { patientId, name, age, gender, currentMedications };
}

const rows = [
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD"),
  createData(12, 'Robin Brown', 45, 'male', "ABCD")
];


function ListEncounters() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell>
                  
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                         <>
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                         </>
                        );
                      })}
                      <TableCell>
                          <Button href='encounters/list/:encounter' >
                            Detail
                          </Button>
                        </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default ListEncounters;