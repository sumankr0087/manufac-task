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
          color: isDark ? '#f8f9fa' : '#1a1a1a'
        },
        axisLine: {
          lineStyle: {
            color: isDark ? '#4a5568' : '#e5e7eb'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: isDark ? '#f8f9fa' : '#1a1a1a'
        },
        axisLine: {
          lineStyle: {
            color: isDark ? '#4a5568' : '#e5e7eb'
          }
        },
        splitLine: {
          lineStyle: {
            color: isDark ? '#4a5568' : '#e5e7eb'
          }
        }
      },
      series: [
        {
          name: 'Average Production',
          type: 'bar',
          data: data.map(item => item.average),
          itemStyle: {
            color: isDark ? '#6b46c1' : '#4f46e5'
          }
        }
      ],
      backgroundColor: isDark ? '#2d3748' : '#f8f9fa'
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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-black dark:text-black">
        Average Crop Production
      </h2>
      <div ref={chartRef} className="w-full h-[400px]" />
    </div>
  );
};