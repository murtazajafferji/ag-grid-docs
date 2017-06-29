var columnDefs = [
    {headerName: 'A', field: 'a', aggFunc: 'sum', valueParser: 'Number(newValue)'},
    {headerName: 'B', field: 'b', aggFunc: 'sum', valueParser: 'Number(newValue)'},
    {headerName: 'C', field: 'c', aggFunc: 'sum', valueParser: 'Number(newValue)'},
    {headerName: 'D', field: 'd', aggFunc: 'sum', valueParser: 'Number(newValue)'},
    {headerName: 'E', field: 'e', aggFunc: 'sum', valueParser: 'Number(newValue)'},
    {headerName: 'F', field: 'f', aggFunc: 'sum', valueParser: 'Number(newValue)'},
    {headerName: 'Total',
        valueGetter: 'data.a + data.b + data.c + data.d + data.e + data.f',
        editable: false,
        aggFunc: 'sum',
        cellClass: 'total-col'}
];

var rowData = [];
for (var i = 1; i<=20; i++) {
    rowData.push({
        group: i < 5 ? 'A' : 'B',
        a: (i * 863) % 100,
        b: (i * 811) % 100,
        c: (i * 743) % 100,
        d: (i * 677) % 100,
        e: (i * 619) % 100,
        f: (i * 571) % 100
    });
}

var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    groupDefaultExpanded: 1,
    suppressAggFuncInHeader: true,
    enableCellChangeFlash: true,
    animateRows: true,
    enableSorting: true,
    defaultColDef: {
        editable: true
    },
    onCellValueChanged: function(event) {
        gridOptions.api.refreshCells({flash: true});
    },
    onGridReady: function(params) {
        params.api.sizeColumnsToFit();
    }
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});