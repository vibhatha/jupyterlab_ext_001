// TableComponent.tsx
import React from 'react';
import { Table } from 'react-bootstrap';

interface PackageData {
    id: number;
    name: string;
    version: string;
}

interface TableComponentProps {
    data: PackageData[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Package Name</th>
                    <th>Version</th>
                </tr>
            </thead>
            <tbody>
                {data.map((pkg) => (
                    <tr key={pkg.id}>
                        <td>{pkg.id}</td>
                        <td>{pkg.name}</td>
                        <td>{pkg.version}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TableComponent;
