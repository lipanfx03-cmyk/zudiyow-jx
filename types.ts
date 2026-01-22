
export interface Trade {
  id: string;
  asset: string;
  assetLabel: string;
  type: 'BUY/LONG' | 'SELL/SHORT';
  entry: number;
  exit: number;
  rrr: string;
  netPL: number;
  timestamp: string;
}

export interface ChartDataPoint {
  date: string;
  balance: number;
  profit: number;
}

export interface SessionData {
  name: string;
  value: number;
  color: string;
}
