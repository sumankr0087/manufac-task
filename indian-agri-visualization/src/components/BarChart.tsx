import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

interface AverageProduction {
  crop: string;
  average: number;
}

interface BarChartProps {
  data: AverageProduction[];
  isDark: boolean;
}

export const BarChart = ({ data, isDark }: BarChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: data.map(item => item.crop),
        axisLabel: {
          rotate: 45,
          color: isDark ? '#fff' : '#333'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: isDark ? '#fff' : '#333'
        }
      },
      series: [
        {
          name: 'Average Production',
          type: 'bar',
          data: data.map(item => item.average),
          itemStyle: {
            color: '#4f46e5'
          }
        }
      ],
      backgroundColor: isDark ? '#1f2937' : '#fff'
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, [data, isDark]);

  return (
    <div className={`p-4 rounded-lg shadow-md ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        Average Crop Production
      </h2>
      <div ref={chartRef} className="w-full h-[400px]" />
    </div>
  );
};