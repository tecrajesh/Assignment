import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
var metaInfo = {
    data:
        [{ "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2020", "Budget": 88377 },
        { "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715 },
        { "id": 3, "name": "Miboo", "startDate": "11/1/2017", "endDate": "6/20/2017", "Budget": 2301 },
        { "id": 4, "name": "Trilith", "startDate": "8/25/2017", "endDate": "11/30/2017", "Budget": 179838 },
        { "id": 5, "name": "Layo", "startDate": "11/28/2017", "endDate": "3/10/2018", "Budget": 837850 },
        { "id": 6, "name": "Photojam", "startDate": "7/25/2017", "endDate": "6/23/2017", "Budget": 858131 },
        { "id": 7, "name": "Blogtag", "startDate": "6/27/2017", "endDate": "1/15/2018", "Budget": 109078 },
        { "id": 8, "name": "Rhyzio", "startDate": "10/13/2017", "endDate": "1/25/2020", "Budget": 272552 },
        { "id": 9, "name": "Zoomcast", "startDate": "9/6/2017", "endDate": "11/10/2017", "Budget": 301919 },
        { "id": 10, "name": "Realbridge", "startDate": "3/5/2017", "endDate": "10/2/2018", "Budget": 505602111111 }]

    , headers: ["Name", "Start Date", "End Date", "Active", "Budget"],
    columns: ["name", "startDate", "endDate", "active", "Budget"],
    dynamicColumns: ["active", "Budget"]
}
ReactDOM.render(<App metaInfo={metaInfo} />, document.getElementById('root'))

window.addCampaigns = (dynamicData) => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    metaInfo.data = [...metaInfo.data, ...dynamicData];
    ReactDOM.render(<App metaInfo={metaInfo} />, document.getElementById('root'))
};