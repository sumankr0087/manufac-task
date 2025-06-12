import { Table } from '@mantine/core';

interface ProcessedData {
  year: string;
  maxCrop: string;
  minCrop: string;
}

interface CropTableProps {
  data: ProcessedData[];
}

export const CropTable = ({ data }: CropTableProps) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Crop Production Extremes by Year
      </h2>
      <div className="overflow-x-auto">
        <Table striped highlightOnHover className="table-auto border border-gray-300">
          <Table.Thead className="text-black dark:text-black">
            <Table.Tr className="border-b border-gray-300">
              <Table.Th className="text-black dark:text-black border-r border-gray-300">Year</Table.Th>
              <Table.Th className="text-black dark:text-black border-r border-gray-300 p-4">Crop with Maximum
Production in that Year</Table.Th>
              <Table.Th className="text-black dark:text-black p-4">Crop with Minimum
Production in that Year</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="text-black dark:text-black">
            {data.map((row) => (
              <Table.Tr key={row.year} className="border-b border-gray-200">
                <Table.Td className="text-black dark:text-black border-r border-gray-200 p-4">{row.year}</Table.Td>
                <Table.Td className="text-black dark:text-black border-r border-gray-200 p-4">{row.maxCrop}</Table.Td>
                <Table.Td className="text-black dark:text-black p-4">{row.minCrop}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
};