var filterParams = {
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    var dateAsString = cellValue;
    var dateParts = dateAsString.split('/');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );

    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }

    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }

    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
   browserDatePicker: true,
};


var columnDefs = [
  {
    field: 'Vehicle',
    filter: 'agSetColumnFilter',
    filterParams: filterParams,
  },
  {
    field: 'Timestamp 2',
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
  },
  {
    field: 'Waste Transfer Note',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Hazardous Consignment Code',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Quantity',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Net weight',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Product',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Status',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Ticket',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Transaction type',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Orig.Ticket',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Round/Collection Number',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Remark',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Name (Client)',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Description (Source)',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Remark (Product)',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Remark (Product)2',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Name 2 (Client)',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Zip code (Client)',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Source (Product)',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Name (Haulier)',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Remark (Client)',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  
  
  
  
];

var gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    flex: 1,
    minWidth: 150,
    filter: true,
	sortable: true,
  },
  
  
};

/* function onQuickFilterChanged() {
  gridOptions.api.setQuickFilter(document.getElementById('quickFilter').value);
} */

// XMLHttpRequest in promise format
/* function makeRequest(method, url, success, error) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.responseType = "arraybuffer";

    httpRequest.open(method, url);
    httpRequest.onload = function () {
        success(httpRequest.response);
    };
    httpRequest.onerror = function () {
        error(httpRequest.response);
    };
    httpRequest.send();
} */

/* set up XMLHttpRequest */
/* var url = "https://klddyork.github.io/NovTest.xlsx";
var oReq = new XMLHttpRequest();

oReq.open("GET", url, true);
oReq.responseType = "arraybuffer"; */

/* oReq.onload = function(e) {
  var arraybuffer = oReq.response; */

  /* convert data to binary string */
  /* var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join(""); */

  /* Call XLSX */
/*   var workbook = XLSX.read(bstr, {type:"binary"}); */

  /* DO SOMETHING WITH workbook HERE */
 /*  var firstSheetName = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[firstSheetName]; */

    // we expect the following columns to be present
    /* var columns = {
        'A': 'Vehicle',
        'B': 'Timestamp 2',
        'C': 'Waste Transfer Note',
        'D': 'Hazardous Consignment Code',
        'E': 'Quantity',
        'F': 'Net weight',
        'G': 'Product',
        'H': 'Status',
        'I': 'Ticket',
        'J': 'Transaction type',
		'K': 'Orig.Ticket',
		'L': 'Round/Collection Number',
		'M': 'Remark',
		'N': 'Name (Client)',
		'O': 'Description (Source)',
		'P': 'Remark (Product)',
		'Q': 'Description (Product)',
		'R': 'Name 2 (Client)',
		'S': 'Zip code (Client)',
		'T': 'Source (Product)',
		'U': 'Name (Haulier)',
		'V': 'Remark (Client)'
    }; */

    /* var rowData = []; */

    // start at the 2nd row - the first row are the headers
    /* var rowIndex = 2; */

    // iterate over the worksheet pulling out the columns we're expecting
    /* while (worksheet['A' + rowIndex]) {
        var row = {};
        Object.keys(columns).forEach(function(column) {
            row[columns[column]] = worksheet[(column + rowIndex)].w;
        });

        rowData.push(row);

        rowIndex++;
    } */

    // finally, set the imported rowData into the grid
   /*  gridOptions.api.setRowData(rowData); */
	//populateGrid(workbook);
	
	//var workbook = convertDataToWorkbook(data);

            //populateGrid(workbook);
/* } */

/* oReq.send(); */

// read the raw data and convert it to a XLSX workbook
/* function convertDataToWorkbook(data) { */
    /* convert data to binary string */
   /*  var data = new Uint8Array(data);
    var arr = new Array();

    for (var i = 0; i !== data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
    }

    var bstr = arr.join("");

    return XLSX.read(bstr, {type: "binary"});
} */

// pull out the values we're after, converting it into an array of rowData


    // our data is in the first sheet
    

// XMLHttpRequest in promise format
function makeRequest(method, url, success, error) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.responseType = "arraybuffer";

    httpRequest.open(method, url);
    httpRequest.onload = function () {
        success(httpRequest.response);
    };
    httpRequest.onerror = function () {
        error(httpRequest.response);
    };
    httpRequest.send();
}

// read the raw data and convert it to a XLSX workbook
function convertDataToWorkbook(data) {
    /* convert data to binary string */
    var data = new Uint8Array(data);
    var arr = new Array();

    for (var i = 0; i !== data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
    }

    var bstr = arr.join("");

    return XLSX.read(bstr, {type: "binary"});
}

// pull out the values we're after, converting it into an array of rowData

function populateGrid(workbook) {
    // our data is in the first sheet
    var firstSheetName = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[firstSheetName];

    // we expect the following columns to be present
    var columns = {
       'A': 'Vehicle',
        'B': 'Timestamp 2',
        'C': 'Waste Transfer Note',
        'D': 'Hazardous Consignment Code',
        'E': 'Quantity',
        'F': 'Net weight',
        'G': 'Product',
        'H': 'Status',
        'I': 'Ticket',
        'J': 'Transaction type',
		'K': 'Orig.Ticket',
		'L': 'Round/Collection Number',
		'M': 'Remark',
		'N': 'Name (Client)',
		'O': 'Description (Source)',
		'P': 'Remark (Product)',
		'Q': 'Description (Product)',
		'R': 'Name 2 (Client)',
		'S': 'Zip code (Client)',
		'T': 'Source (Product)',
		'U': 'Name (Haulier)',
		'V': 'Remark (Client)'
    };

    var rowData = [];

    // start at the 2nd row - the first row are the headers
    var rowIndex = 2;

    // iterate over the worksheet pulling out the columns we're expecting
    while (worksheet['A' + rowIndex]) {
        var row = {};
        Object.keys(columns).forEach(function(column) {
            row[columns[column]] = worksheet[column + rowIndex].w;
        });

        rowData.push(row);

        rowIndex++;
    }

    // finally, set the imported rowData into the grid
    gridOptions.api.setRowData(rowData);
}

function importExcel() {
    makeRequest('GET',
        'https://klddyork.github.io/NovTest.xlsx',
        // success
        function (data) {
            var workbook = convertDataToWorkbook(data);

            populateGrid(workbook);
        },
        // error
        function (error) {
            throw error;
        }
    );
}


// wait for the document to be loaded, otherwise
// ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", function () {

    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);
});
