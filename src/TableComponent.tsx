// TableComponent.tsx
import React from 'react';
import { Table, Button } from 'react-bootstrap';

interface PackageData {
    id: number;
    name: string;
    version: string;
}

interface TableComponentProps {
    data: PackageData[];
}


const TableComponent: React.FC<TableComponentProps> = ({ data }) => {

    // Handle button click
    const handleButtonClick = (pkg: PackageData) => {
        alert(`Are you sure you want to uninstall?\nPackage ID: ${pkg.id}\nName: ${pkg.name}\nVersion: ${pkg.version}`);
    };

    return (
        <div className="scrollable-table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Package Name</th>
                        <th>Version</th>
                        <th>Uninstall</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pkg) => (
                        <tr key={pkg.id}>
                            <td>{pkg.id}</td>
                            <td>{pkg.name}</td>
                            <td>{pkg.version}</td>
                            <td>
                                <Button
                                    variant="primary"
                                    className="custom-button"
                                    onClick={() => handleButtonClick(pkg)}
                                >
                                    Uninstall
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TableComponent;
