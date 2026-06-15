const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

export async function getProperties(sheetName: string) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(sheetName)}!A1:BC200?key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  if (!data.values) return [];
  const headers = data.values[0];
  const rows = data.values.slice(3);
  return rows
    .filter((row: string[]) => row[1])
    .map((row: string[]) => {
      const obj: Record<string, string> = {};
      headers.forEach((header: string, i: number) => {
        obj[header] = row[i] || '';
      });
      obj['_sheetName'] = sheetName;
      return obj;
    });
}

export function safeProperty(property: Record<string, string>) {
  return {
    sheetName: property['_sheetName'] || '',
    type: property['_sheetName'] || '',
    name: property['건물명'] || property['물건종류'] || property['주택종류'] || '',
    address: property['소재지'] || '',
    deposit: property['보증금(만)'] || '',
    monthly: property['월세(만)'] || '',
    price: property['매매가(만)'] || '',
    jeonse: property['전세금(만)'] || '',
    size: property['공급㎡'] || property['연면적㎡'] || property['대지㎡'] || '',
    floor: property['해당층'] || '',
    status: property['구분'] || '',
    description: property['매물설명'] || '',
    image: property['사진'] || '',
  };
}