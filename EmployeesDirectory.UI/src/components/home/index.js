import * as React from "react";
import { Component } from 'react';
import MaterialGrid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import { fetchEmployees } from "../../redux/actions/home.actions";
import {
  withStyles,
} from "@material-ui/core/styles";
import {
  Column,
  FilteringState,
  GroupingState,
  IntegratedFiltering,
  IntegratedGrouping,
  IntegratedPaging,
  IntegratedSelection,
  IntegratedSorting,
  PagingState,
  SelectionState,
  SortingState,
  EditingState,
  RowDetailState
} from "@devexpress/dx-react-grid";
import {
  DragDropProvider,
  Grid,
  GroupingPanel,
  PagingPanel,
  Table,
  TableFilterRow,
  TableGroupRow,
  TableHeaderRow,
  TableSelection,
  Toolbar,
  TableEditRow,
  TableEditColumn,
  TableRowDetail
} from "@devexpress/dx-react-grid-material-ui";

const useStyles = (theme) => ({
  root:{},
  imgContainer:{
    display: "table-column",
    marginTop: "auto",
  },
  profileImg:{
    height: 80,
    borderRadius: 100,
  },
  detailsContainer:{
    display: 'flex',
    paddingLeft: 110,
  },
  tool:{
    background: "#2196F3",
    width: "100%",
    position: "fixed",
    zIndex: 99999,
  },
  centerTextCol:{
    marginTop: "auto",
    marginBottom: "auto",
  }
});

class HomeComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        list:[]
      };
  }
  componentDidMount() {
    this.props.dispatch(fetchEmployees());
    this.setState({ list:this.props.list.list });
  }



  componentWillReceiveProps(nextProps) {
    this.setState({list: nextProps.list.list})
  }

  componentWillMount() {
    this.setState({ list:this.props.list })
  }



  commitChanges({ added, changed, deleted }){
    let changedRows;
    let employeesList = this.state.list;

console.log(employeesList);
     console.log(added, changed, deleted);
    if (added) {
      console.log("added");
      // const startingAddedId = employeesList.length > 0 ? employeesList[employeesList.length - 1].id + 1 : 0;
      // changedRows = [
      //   ...employeesList,
      //   ...added.map((row, index) => ({
      //     id: startingAddedId + index,
      //     ...row,
      //   })),
      // ];
    }
     if (changed) {
      const first =0;
      const key=Object.keys(changed)[first];
      const properties = Object.keys(changed[key]);
      properties.forEach(propertyName => {
        employeesList[key][propertyName] = changed[key][propertyName];
      });


      console.log(employeesList[key], "employeessss ");
    }
    if (deleted) {
      console.log("deleted");
      //const deletedSet = new Set(deleted);
      //changedRows = this.state.list.filter(row => !deletedSet.has(row.id));
    }
    //setRows(changedRows);
    this.setState( {list : employeesList})
  };

  RowDetail({ row }){
    const { classes } = this.props;
    console.log(row, "towwwww");
    return (
      <div className={classes.detailsContainer}>
        <div className={classes.imgContainer}>
          <img src={row.imageUrl} alt="Profile Image" className={classes.profileImg} ></img>        
        </div>
        <div className={classes.centerTextCol}>
          <Box pl={2}>
            <div>
              {row.firstName} {row.lastName}
            </div>
            <div>
              {row.jobTitle}
            </div>
          </Box>
        </div>

        <div className={classes.centerTextCol}>
          <Box pl={2}>
            <div>
              Department: {row.department}
            </div>
            <div>
              Date of Birth: {row.dob}
            </div>
          </Box>
        </div>
        <div className={classes.centerTextCol}>
          <Box pl={2}>
            <div>
              Phone: {row.phoneNumber}
            </div>
            <div>
              Email: {row.email}
            </div>
          </Box>
        </div>
      </div>      
    )
  };

render(){
  const columns =[
    { name: "firstName", title: "First Name" },
    { name: "lastName", title: "Last Name" },
    { name: "jobTitle", title: "Title" },
    { name: "department", title: "Department" },
    { name: "phoneNumber", title: "Phone"},
    { name: "email", title: "Email"},
  ];
  const pageSizes = [5, 10, 15];
  const { classes, list } = this.props;

  
  
  return (
    <div>
      {list.loaded ?
        <div className={classes.root}>          
          <MaterialGrid container spacing={2}>
            <MaterialGrid item xs={12}>
              <Grid rows={list.list} columns={columns}>
                <FilteringState
                  defaultFilters={[
                    // example { columnName: "saleDate", value: "2016-02" }
                  ]}
                />
                <SortingState
                  defaultSorting={[
                    { columnName: "department", direction: "asc" },
                    { columnName: "firstName", direction: "asc" }
                  ]}
                />
                <RowDetailState
                  defaultExpandedRowIds={[1, 2]}
                />
                <SelectionState />
                <EditingState
                  onCommitChanges={(event)=>this.commitChanges(event)}
                />
                <GroupingState
                  defaultGrouping={[{ columnName: "department" }]}
                  defaultExpandedGroups={["HR"]}
                />
                <PagingState />
                <IntegratedGrouping />
                <IntegratedFiltering />
                <IntegratedSorting />
                <IntegratedPaging />
                <IntegratedSelection />
                <DragDropProvider />
                <Table />
                <TableHeaderRow showSortingControls={true} />
                <TableEditRow />
                <TableEditColumn
                  showAddCommand
                  showEditCommand
                  showDeleteCommand
                />
                <TableFilterRow showFilterSelector={true} />
                <PagingPanel pageSizes={pageSizes} />
                <TableGroupRow />
                <Toolbar />
                <GroupingPanel showSortingControls={true} />
                <TableRowDetail
                  contentComponent={(event)=>this.RowDetail(event)}
                />
              </Grid>
            </MaterialGrid>
          </MaterialGrid>  
        </div>
      : list.loading ? 
        <div>Loading Employees list...</div>
      :
        <div>Employees list not available...</div>
      } 
    </div>
  );
};
}
export default withStyles(useStyles)(HomeComponent);