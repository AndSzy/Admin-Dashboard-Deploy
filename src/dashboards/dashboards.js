
import json from "../utilities/json/inflation.json"

// dopracowac id


const listOfDashboards = [[
    { id: "1", span: true, color: '#00257d', chartType: 'bar', dataset: [{values:json.uk, text: "UK"}], text: "Inflation", title: "UK"}, 
    { id: "2", span: false, color: '#c20101', chartType: 'bar', dataset: [{values:json.poland, text: "Poland"}], text: "Inflation", title: "Poland" }, 
    { id: "3", span: false, color: 'yellow', chartType: 'bar', dataset: [{values:json.japan, text: "Japan"}], text: "Inflation", title: "Japan" },
    { id: "4", span: true, color: '#6a141f', chartType: 'bar', dataset: [{values:json.usa, text: "USA"}], text: "Inflation", title: "USA" },
],
[{ id: "b1", span: true, chartType: 'line', dataset: [{values:json.poland, text: "Poland"},{values:json.japan, text: "Japan"},{values:json.usa, text: "USA"},{values:json.uk, text: "UK"}], text: "Inflation"}]]


export { listOfDashboards };