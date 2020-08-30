import * as React from "react";
import { Component } from 'react';
import MaterialGrid from "@material-ui/core/Grid";
import { fetchEmployees } from "../../redux/actions/home.actions";
import {
  createStyles,
  withStyles,
  Theme
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
  SortingState
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
  Toolbar
} from "@devexpress/dx-react-grid-material-ui";
import { generateRows, globalSalesValues } from "./generator";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
    color: "#ffffff"
  },
  panelSummary: {
    backgroundColor: "#250e62",
    maxHeight: "25px"
  },
  icon: {
    color: "#ffffff"
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  },
  auto: {
    width: "100%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const sales = generateRows({
  columnValues: globalSalesValues,
  length: 1000
});

const availableFilterOperations = [
  "equal",
  "notEqual",
  "greaterThan",
  "greaterThanOrEqual",
  "lessThan",
  "lessThanOrEqual"
];

const styles = (theme) =>
  createStyles({
    currency: {
      fontWeight: theme.fontWeightMedium
    },
    numericInput: {
      fontSize: "14px",
      width: "100%"
    }
  });


function getInputValue (value)
{
  if (value === undefined){ return "" };
  return value;
};
  
function getColor(amount)
{
  if (amount < 3000) {
    return "#F44336";
  }
  if (amount < 5000) {
    return "#FFC107";
  }
  if (amount < 8000) {
    return "#FF5722";
  }
  return "#009688";
}



class HomeComponent extends Component {
  constructor(props) {
      super(props);
      // this.state = {
      //     redirected: false
      // }
  }

  componentDidMount() {
    this.props.dispatch(fetchEmployees());
  }

render(){
  const columns =[
    { name: "product", title: "Product" },
    { name: "region", title: "Region" },
    { name: "amount", title: "Sale Amount" },
    { name: "saleDate", title: "Sale Date" },
    { name: "customer", title: "Customer" }
  ];
  const rows = sales;
  const pageSizes = [5, 10, 15];
  const { classes } = this.props;
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <MaterialGrid container spacing={2}>
        <MaterialGrid item xs={12}>
          <Grid rows={rows} columns={columns}>
            <FilteringState
              defaultFilters={[
                // { columnName: "saleDate", value: "2016-02" }
              ]}
            />
            <SortingState
              defaultSorting={[
                { columnName: "product", direction: "asc" },
                { columnName: "saleDate", direction: "asc" }
              ]}
            />
            <SelectionState />
            <GroupingState
              defaultGrouping={[{ columnName: "product" }]}
              defaultExpandedGroups={["EnviroCare Max"]}
            />
            <PagingState />
            <IntegratedGrouping />
            <IntegratedFiltering />
            <IntegratedSorting />
            <IntegratedPaging />
            <IntegratedSelection />
            <DragDropProvider />
            <Table />
            <TableSelection showSelectAll={true} />
            <TableHeaderRow showSortingControls={true} />
            <TableFilterRow showFilterSelector={true} />
            <PagingPanel pageSizes={pageSizes} />
            <TableGroupRow />
            <Toolbar />
            <GroupingPanel showSortingControls={true} />
          </Grid>
        </MaterialGrid>
      </MaterialGrid>
  </div>
  );
};
}
export default withStyles(useStyles)(HomeComponent);