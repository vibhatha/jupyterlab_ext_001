import React from 'react';
import { Table } from 'react-bootstrap';
import { ReactWidget } from '@jupyterlab/ui-components';


const TableComponent = (): JSX.Element => {
    const name = "Sample";
    const age = 12;
    return (
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Peter</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{name}</td>
                        <td>{age}</td>
                    </tr>
                </tbody>
            </Table>
    );
};


export class TableWidget extends ReactWidget {
    /**
     * Constructs a new CounterWidget.
     */
    constructor() {
        super();
        this.addClass('jp-react-widget');
    }

    render(): JSX.Element {
        return <TableComponent />;
    }
}