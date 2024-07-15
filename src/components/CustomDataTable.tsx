import { Fragment, useState } from "react";
import DataTable, { createTheme, TableColumn, TableStyles } from "react-data-table-component";
import { Link, useSearchParams } from "react-router-dom";

type CustomDataTableProps = {
  dataColumns: TableColumn<any>[],
  dataRows: any[],
  paginationTotalRows: number,
  dense?: boolean,
  selectableRows ?: boolean,
  onSelectedRowsChange?: ((selected: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: any[];
}) => void)
}
const CustomDataTable = ({ dataColumns, dataRows, paginationTotalRows, dense = false, selectableRows= false, onSelectedRowsChange}: CustomDataTableProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resetPagination, setResetPagination] = useState(false);



  const columns: TableColumn<any>[] = [
    {
      name: '#',
      selector: (row: any, rowIndex: any) => (parseInt(searchParams.get('size') || '0') * (parseInt(searchParams.get('page') || '1') - 1)) + rowIndex + 1,
      width: "40px",
      center: true,
    },
    ...dataColumns,
  ]

  createTheme('customTheme1', {
    text: {
      primary: 'black',
      secondary: '#5f6600',
    },
  }, 'light');

  const customStyles: TableStyles = {
    head: {
      style: {
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        background: 'white',
        fontSize: '15px',
        cursor: 'pointer',
      },
    },
    headCells: {
      style: {
        justifyContent: "center",
        paddingLeft: '5px', // override the cell padding for head cells
        paddingRight: '5px',
        // marginLeft: 5,
        // marginRight: 5
      },
    },
    cells: {
      style: {
        // paddingLeft: '5px', // override the cell padding for data cells
        // paddingRight: '5px',
      },
    },
  };

  const handleChangeRowsPerPage = (currentRowsPerPage: number, currentPage: number) => {
    console.log({ currentRowsPerPage, currentPage });
    searchParams.set('size', currentRowsPerPage.toString());

    if (currentPage != 1) {
      searchParams.set('page', currentPage.toString());
    }
    setSearchParams(searchParams);
  }

  const handleChangePage = (page: number, totalRows: number) => {
    console.log({ page, totalRows });

    if (!page || page == 1) {
      searchParams.delete('page');
      setSearchParams(searchParams);
    }
    else {
      searchParams.set('page', page.toString());
      setSearchParams(searchParams);
    }
  }

  const handleSearch = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const keyword = e.target[0].value;
    console.log(keyword);

    if (!keyword) {
      searchParams.delete('q');
      setSearchParams(searchParams);
    }
    else {
      searchParams.set('q', keyword);
      setSearchParams(searchParams);
    }
  }

  return (
    <Fragment>
      <DataTable
        columns={columns}
        data={dataRows}
        className="custom-datatable custom-outline-border table-hover col-12"
        dense={dense}
        theme="customTheme1"
        customStyles={customStyles}
        striped={true}
        highlightOnHover={true}
        responsive={true}
        selectableRows={selectableRows}

        pagination
        paginationServer
        paginationTotalRows={paginationTotalRows}
        paginationDefaultPage={searchParams.get('page') ? parseInt(searchParams.get('page')!) : undefined}
        paginationPerPage={searchParams.get('size') ? parseInt(searchParams.get('size')!) : undefined}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        paginationResetDefaultPage={resetPagination}
        onSelectedRowsChange={onSelectedRowsChange}

        // fixedHeader={true}
        // fixedHeaderScrollHeight="calc(100vh - 245px)"
        persistTableHead={true}
        subHeader={true}
      // subHeaderComponent={
      //   <Fragment>
      //     <div style={{ maxWidth: "200px", left: 10, position: 'relative' }}>
      //       <form className="input-group mb-3" onSubmit={handleSearch}>
      //         <input type="text" className="btn-outline-info bg-light form-control form-control-sm"
      //           // onChange={(e)=>{e.target.value==""&& }}
      //           defaultValue={searchParams.get('q') || ""}
      //           placeholder="Type to search" />
      //         {/* <span className="input-group-text text-light btn-sm bg-info">Search</span> */}
      //         <button className="btn text-light btn-sm btn-info" type="submit" >Search</button>
      //       </form>
      //     </div>
      //   </Fragment>
      // }
      // subHeaderWrap={true}

      // progressPending={!products?.length ? true : false}
      // progressComponent={<h2>Loading.....</h2>}
      />
    </Fragment >
  )
}

export default CustomDataTable;