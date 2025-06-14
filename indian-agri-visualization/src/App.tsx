import { useMemo } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import { BarChart } from './components/BarChart';
import { CropTable } from './components/CropTable';
import { ThemeToggle } from './components/ThemeToggle';
import { processTableData, processChartData } from './utils/dataProcessor';
import { useTheme } from './hooks/useTheme';
import agricultureData from './assets/agricultureData.json';

function App() {
  const { isDark, toggleTheme } = useTheme();

  const tableData = useMemo(() => processTableData(agricultureData), []);
  const chartData = useMemo(() => processChartData(agricultureData), []);

  return (
    <MantineProvider forceColorScheme={isDark ? 'dark' : 'light'}>
      <div className={`min-h-screen p-8 ${isDark ? 'dark' : 'light'}`}>
        <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Indian Agriculture Data Visualization
        </h1>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <CropTable data={tableData} />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <BarChart data={chartData} isDark={isDark} />
          </div>
        </div>

        <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
      </div>
    </MantineProvider>
  );
}

export default App;