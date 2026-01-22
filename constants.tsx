
import { Trade, ChartDataPoint, SessionData } from './types';

export const MOCK_TRADES: Trade[] = [
  {
    id: '1',
    asset: 'EUR/USD',
    assetLabel: 'EU',
    type: 'BUY/LONG',
    entry: 1.08420,
    exit: 1.08950,
    rrr: '1:2.8',
    netPL: 840.00,
    timestamp: '24 Oct, 14:30',
  },
  {
    id: '2',
    asset: 'GBP/USD',
    assetLabel: 'GU',
    type: 'SELL/SHORT',
    entry: 1.21550,
    exit: 1.21700,
    rrr: '1:1.5',
    netPL: -320.00,
    timestamp: '24 Oct, 11:15',
  },
  {
    id: '3',
    asset: 'XAU/USD',
    assetLabel: 'XAU',
    type: 'BUY/LONG',
    entry: 1985.40,
    exit: 2002.10,
    rrr: '1:3.2',
    netPL: 1120.00,
    timestamp: '23 Oct, 16:45',
  },
  {
    id: '4',
    asset: 'USD/JPY',
    assetLabel: 'UJ',
    type: 'SELL/SHORT',
    entry: 149.50,
    exit: 148.80,
    rrr: '1:2.1',
    netPL: 550.00,
    timestamp: '22 Oct, 09:20',
  }
];

export const MOCK_CHART_DATA: ChartDataPoint[] = [
  { date: '01 OCT', balance: 50000, profit: 0 },
  { date: '08 OCT', balance: 51200, profit: 1200 },
  { date: '15 OCT', balance: 50800, profit: -400 },
  { date: '22 OCT', balance: 53500, profit: 2700 },
  { date: '29 OCT', balance: 54250, profit: 750 },
];

export const SESSION_BREAKDOWN: SessionData[] = [
  { name: 'London', value: 52, color: '#137fec' },
  { name: 'New York', value: 38, color: '#22c55e' },
  { name: 'Tokyo', value: 10, color: '#475569' },
];
