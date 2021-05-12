import data from './data.js'; //data for render
import countPopularityStars from './countPopularityStars.js'

//for star formatter
data.map(el => {
    countPopularityStars(el);
    return el;
})

const table = new Tabulator("#table1", {
    data: data, //set initial table data
    layout: "fitColumns", //fit columns to width of table
    tooltips: true,
    tooltipsHeader: true,
    responsiveLayout: "collapse", //hide columns that dont fit on the table
    addRowPos: "top", //when adding a new row, add it to the top of the table
    history: true, //allow undo and redo actions on the table
    // pagination: "local", //paginate the data
    // paginationSize: 7, //allow 7 rows per page of data
    movableColumns: true, //allow column order to be changed
    resizableRows: true, //allow row order to be changed
    initialSort: [ //set the initial sort order of the data
        {
            column: "popularity",
            dir: "desc"
        },
    ],
    columns: [ //define the table columns
        {
            title: "Название",
            field: "name",
            hozAlign: "left",
            editor: "input"
        },
        {
            title: "Ссылка",
            field: "link",
            hozAlign: "left",
            formatter: "link",
            formatterParams: {
                label: "url",
                target: "_blank",
            },
            editor: true
        },
        {
            title: "Совместимость",
            field: "compatibility",
            hozAlign: "left",
            editor: 'input'
        },
        {
            title: "Cкриншот",
            field: "screenshot",
            hozAlign: "center",
            formatter: "tickCross",
            formatterParams: {
                allowEmpty: true
            },
            sorter: "boolean",
            editor: true
        },
        {
            title: "Мобильные",
            field: "mobile",
            hozAlign: "center",
            formatter: "tickCross",
            formatterParams: {
                allowEmpty: true
            },
            sorter: "boolean",
            editor: true
        },
        {
            title: "Пр.клик",
            field: "rightClick",
            hozAlign: "center",
            formatter: "tickCross",
            formatterParams: {
                allowEmpty: true
            },
            sorter: "boolean",
            editor: true
        },
        {
            title: "Выд-е текста",
            field: "textSelection",
            hozAlign: "center",
            formatter: "tickCross",
            formatterParams: {
                allowEmpty: true
            },
            sorter: "boolean",
            editor: true
        },
        {
            title: "F12",
            field: "F12",
            hozAlign: "center",
            formatter: "tickCross",
            formatterParams: {
                allowEmpty: true
            },
            sorter: "boolean",
            editor: true
        },
        {
            title: "Ctrl+Shift+I",
            field: "ctrlShiftI",
            hozAlign: "center",
            formatter: "tickCross",
            formatterParams: {
                allowEmpty: true
            },
            sorter: "boolean",
            editor: true
        },
        {
            title: "Ctrl+U",
            field: "ctrlU",
            hozAlign: "center",
            formatter: "tickCross",
            formatterParams: {
                allowEmpty: true
            },
            sorter: "boolean",
            editor: true
        },
        {
            title: "Ctrl+A,C,V,X",
            field: "ctrlACVX",
            hozAlign: "center",
            formatter: "tickCross",
            formatterParams: {
                allowEmpty: true
            },
            sorter: "boolean",
            editor: true
        },
        {
            title: "Ctrl+S",
            field: "ctrlS",
            hozAlign: "center",
            formatter: "tickCross",
            formatterParams: {
                allowEmpty: true
            },
            sorter: "boolean",
            editor: true
        },
        {
            title: "Сtrl+P",
            field: "ctrlP",
            hozAlign: "center",
            formatter: "tickCross",
            formatterParams: {
                allowEmpty: true
            },
            sorter: "boolean",
            editor: true
        },
        {
            title: "Популярность",
            field: "popularity",
            formatter: "star",
            hozAlign: "center",
            editor: true
        },
        {
            title: "Замечания",
            field: "note",
            hozAlign: "left",
            editor: "input"
        },

    ],
});

//trigger download of data.xlsx file
document.getElementById("download-xlsx").addEventListener("click", function () {
    table.download("xlsx", "data.xlsx", {
        sheetName: "My Data"
    });
});

//undo button
document.getElementById("history-undo").addEventListener("click", function () {
    table.undo();
});

//redo button
document.getElementById("history-redo").addEventListener("click", function () {
    table.redo();
});

document.getElementById("add-row").addEventListener("click", function () {
    const inputs = document.getElementById('table2').querySelectorAll('INPUT');
    const dataNew = {};
    inputs.forEach(input => dataNew[input.id] = input.id);

    dataNew.id = data[data.length];
    dataNew.popularity = countPopularityStars(dataNew);

    //add new info to db
    data.push(dataNew);

    //update table
    table.addRow({
            id: dataNew.id,
            name: dataNew.name,
            link: dataNew.link,
            compatibility: dataNew.compatibility,
            screenshot: Boolean(dataNew.screenshot),
            mobile: Boolean(dataNew.mobile),
            rightClick: Boolean(dataNew.rightClick),
            textSelection: Boolean(dataNew.textSelection),
            F12: Boolean(dataNew.F12),
            ctrlShiftI: Boolean(dataNew.ctrlShiftI),
            ctrlU: Boolean(dataNew.ctrlU),
            ctrlACVX: Boolean(dataNew.ctrlACVX),
            ctrlS: Boolean(dataNew.ctrlS),
            ctrlP: Boolean(dataNew.ctrlP),
            popularity: dataNew.popularity,
            note: dataNew.note
        })
        .then(alert('Добавлено ок'))
        .catch(function (error) {
            console.log(error);
        })
})

document.getElementById("delete-row").addEventListener("click", function () {
    const rowNum = Number(document.getElementById('delrow').value);
    table.deleteRow(rowNum);
})
//document.querySelectorAll('.tabulator-row')[0]//