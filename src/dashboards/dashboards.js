
import json from "../utilities/json/inflation.json"

// dopracowac id


const dashboard1 = [
    { id: "1", color: '#00257d', chartType: 'bar', dataset: [{values:json.uk}], text: "Inflation", title: "UK" }, 
    { id: "2", color: '#c20101', chartType: 'bar', dataset: [{values:json.poland}], text: "Inflation", title: "Poland" }, 
    { id: "3", color: 'yellow', chartType: 'bar', dataset: [{values:json.japan}], text: "Inflation", title: "Japan" },
    { id: "4", color: '#6a141f', chartType: 'bar', dataset: [{values:json.usa}], text: "Inflation", title: "USA" },
];
const dashboard2 = [{ id: "b1", chartType: 'line', dataset: [{values:json.poland, text: "Poland"},{values:json.japan, text: "Japan"},{values:json.usa, text: "USA"},{values:json.uk, text: "UK"}], text: "Inflation"}];


export { dashboard1, dashboard2 };