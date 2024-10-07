// src/components/Table.tsx
import React from 'react';

interface TableProps {
    data: Array<{ [key: string]: any }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(data[0] || {}).map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.values(row).map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
