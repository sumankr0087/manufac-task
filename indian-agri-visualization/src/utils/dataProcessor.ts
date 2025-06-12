interface CropData {
    Year: string;
    "Crop Name": string;
    "Crop Production (UOM:t(Tonnes))": string | number;
  }
  
  interface ProcessedData {
    year: string;
    maxCrop: string;
    minCrop: string;
  }
  
  interface AverageProduction {
    crop: string;
    average: number;
  }
  
  export const processTableData = (data: CropData[]): ProcessedData[] => {
    const yearMap = new Map<string, Map<string, number>>();
  
    // Group by year and crop
    data.forEach(item => {
      const year = item.Year.split(', ')[1];
      const crop = item["Crop Name"];
      const production = item["Crop Production (UOM:t(Tonnes))"];
      const productionNum = typeof production === 'string' ? 
        (production === '' ? 0 : parseFloat(production)) : 
        production;
  
      if (!yearMap.has(year)) {
        yearMap.set(year, new Map());
      }
  
      const cropMap = yearMap.get(year)!;
      cropMap.set(crop, (cropMap.get(crop) || 0) + productionNum);
    });
  
    // Process each year to find min and max crops
    const result: ProcessedData[] = [];
    yearMap.forEach((cropMap, year) => {
      let maxCrop = '';
      let minCrop = '';
      let maxProduction = -Infinity;
      let minProduction = Infinity;
  
      cropMap.forEach((production, crop) => {
        if (production > maxProduction) {
          maxProduction = production;
          maxCrop = crop;
        }
        if (production < minProduction) {
          minProduction = production;
          minCrop = crop;
        }
      });
  
      result.push({
        year,
        maxCrop,
        minCrop
      });
    });
  
    // Sort by year
    return result.sort((a, b) => parseInt(a.year) - parseInt(b.year));
  };
  
  export const processChartData = (data: CropData[]): AverageProduction[] => {
    const cropMap = new Map<string, { sum: number; count: number }>();
  
    // Calculate sum and count for each crop
    data.forEach(item => {
      const crop = item["Crop Name"];
      const production = item["Crop Production (UOM:t(Tonnes))"];
      const productionNum = typeof production === 'string' ? 
        (production === '' ? 0 : parseFloat(production)) : 
        production;
  
      if (!cropMap.has(crop)) {
        cropMap.set(crop, { sum: 0, count: 0 });
      }
  
      const cropData = cropMap.get(crop)!;
      cropData.sum += productionNum;
      cropData.count += 1;
    });
  
    // Calculate average for each crop
    const result: AverageProduction[] = [];
    cropMap.forEach(({ sum, count }, crop) => {
      result.push({
        crop,
        average: sum / count
      });
    });
  
    return result;
  };