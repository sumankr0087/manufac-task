import { useMemo } from 'react';
import { MantineProvider } from '@mantine/core';
import { BarChart } from './components/BarChart';
import { CropTable } from './components/CropTable';
import { ThemeToggle } from './components/ThemeToggle';
import { processTableData, processChartData } from './utils/dataProcessor';
import { useTheme } from './hooks/useTheme';
import agricultureData from './assets/agricultureData.json';

function App() {
  const { isDark } = useTheme();

  const tableData = useMemo(() => processTableData(agricultureData), []);
  const chartData = useMemo(() => processChartData(agricultureData), []);

  return (
    <MantineProvider theme={{
        colorScheme: isDark ? 'dark' : 'light',
      }}>
      <div className={`min-h-screen p-8 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Indian Agriculture Data Visualization
        </h1>
        
        <div className="max-w-6xl mx-auto space-y-8">
          <CropTable data={tableData} isDark={isDark}/>
          <BarChart data={chartData} isDark={isDark} />
        </div>

        <ThemeToggle />
      </div>
    </MantineProvider>
  );
}

export default App;