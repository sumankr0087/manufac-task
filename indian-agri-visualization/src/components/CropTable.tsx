import { Table } from '@mantine/core';

interface ProcessedData {
  year: string;
  maxCrop: string;
  minCrop: string;
}

interface CropTableProps {
  data: ProcessedData[];
  isDark: boolean;
}

export const CropTable = ({ data, isDark }: CropTableProps) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        Crop Production Extremes by Year
      </h2>
      <div className="overflow-x-auto">
      <Table striped highlightOnHover className="table-auto border border-gray-300">
  <Table.Thead>
    <Table.Tr className="border-b border-gray-300">
      <Table.Th className="border-r border-gray-300 p-4">Year</Table.Th>
      <Table.Th className="border-r border-gray-300 p-4">Crop with Maximum Production</Table.Th>
      <Table.Th className='p-4'>Crop with Minimum Production</Table.Th>
    </Table.Tr>
  </Table.Thead>
  <Table.Tbody>
    {data.map((row) => (
      <Table.Tr key={row.year} className="border-b border-gray-200">
        <Table.Td className="border-r border-gray-200 p-4">{row.year}</Table.Td>
        <Table.Td className="border-r border-gray-200 p-4">{row.maxCrop}</Table.Td>
        <Table.Td className='p-4'>{row.minCrop}</Table.Td>
      </Table.Tr>
    ))}
  </Table.Tbody>
</Table>

      </div>
    </div>
  );
};