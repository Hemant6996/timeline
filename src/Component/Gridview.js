import React from 'react';
import MaterialTable from 'material-table'

function Gridview() {

const griddata = [
  {
    id:"1",
    firstname:"Hemant",
    lastname:"kumar",
    contact:"2525815297",
    city:"Noida",
    country:"India"
  },
  {
    id:"2",
    firstname:"Mayank",
    lastname:"saxena",
    contact:"22422852282",
    city:"Ghaziabad",
    country:"India"
  },
  {
    id:"3",
    firstname:"Niraj",
    lastname:"singh",
    contact:"1254245272",
    city:"Noida",
    country:"India"
  }
]

const columns = [
    {title:"ID", field:"id"},
    {title:"First Name", field:"firstname"},
    {title:"Last Name", field:"lastname"},
    {title:"Phone Number", field:"contact"},
    {title:"Location", field:"city"},
    {title:"Country", field:"country"},
  
]

  return (
    <div>
      <div>
        <MaterialTable columns={columns} data={griddata}
        options={{
          grouping: true, columnsButton: true,
          sorting: true, search: true,
        }}
        />
        
      </div>
    </div>
  )
}




{/* <MaterialTable columns={columns} data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTableData([...tableData, newRow])

            setTimeout(() => resolve(), 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)

          })
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          }
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
            disabled: rowData.age == null,
            // color:"primary"
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336",color:"#fff"}
        }}
        title="Student Information"
        icons={{ Add: () => <AddIcon /> }} /> */}


export default Gridview