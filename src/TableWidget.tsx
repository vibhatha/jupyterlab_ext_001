import React from 'react';
import { ReactWidget } from '@jupyterlab/ui-components';
import TableComponent from './TableComponent';

interface PackageData {
    id: number;
    name: string;
    version: string;
}

export class TableWidget extends ReactWidget {
    private data: PackageData[] = [];

    constructor() {
        super();
        this.addClass('jp-react-widget');
        this.loadData();
    }

    async loadData() {
        try {
            const response = await fetch('/pip-list');
            if (!response.ok) {
                throw new Error('Failed to fetch package list');
            }
            const result = await response.json();
            this.data = result.map((pkg: any, index: number) => ({
                id: index + 1,
                name: pkg.name,
                version: pkg.version
            }));
            this.update();  // Trigger re-render
        } catch (error) {
            console.error('Error fetching pip list:', error);
        }
    }

    render(): JSX.Element {
        return <TableComponent data={this.data} />;
    }
}
