import React, {Component} from 'react';
import axios from ''

class TableExample extends Component {
    constructor() {
        super();

        this.state = {
            tableData: {
                resourceID: '',
                resourceType: '',
                tenantName: '',
                dealerID: '',
                status: '',
                logFilePath: '',
                supportPerson: '',
                lastUpdatedTime: '',
            },
        };
    }

    componentDidMount() {
        axios.get(`https://myAPI.restdb.io/rest/mock-data`, {
            headers: {'x-apikey': 'apiKEY'}
        })
            .then(response => {
                this.setState({ tableData: response.data.tableData });
                //console.log(tableData);
            });}

    render() {
        const { tableData } = this.state;

        return (
            <div>
                <ReactTable
                    data={tableData}
                    columns={[
                        {
                            Header: 'Details',
                            columns: [
                                {
                                    Header: 'Tenant Name',
                                    accessor: '{this.state.tableData.tenantName}',
                                },
                                {
                                    Header: 'Support Engineer',
                                    id: '{this.state.tableData.supportEngineer}',
                                    accessor: d => d.supportPerson,
                                },
                            ],
                        },
                        {
                            Header: 'Info',
                            columns: [
                                {
                                    Header: 'Dealer ID',
                                    accessor:'{this.state.tableData.dealerID}',
                                },
                                {
                                    Header: 'Status',
                                    accessor:'{this.state.tableData.status}',
                                },
                            ],
                        },
                        {
                            Header: 'Logs',
                            columns: [
                                {
                                    Header: 'File Path',
                                    accessor:'{this.state.tableData.filePath}',
                                },
                            ],
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        );
    }
}

export default TableExample;


[
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
]