// Generated by https://quicktype.io

export interface User {
  "User ID": number;
  Name: string;
  Total: number;
  Hunt: number;
  Purchase: number;
  " ": string;
  "L1 (Hunt)": number;
  "L2 (Hunt)": number;
  "L3 (Hunt)": number;
  "L4 (Hunt)": number;
  "L5 (Hunt)": number;
  " _1": string;
  "L1 (Purchase)": number;
  "L2 (Purchase)": number;
  "L3 (Purchase)": number;
  "L4 (Purchase)": number;
  "L5 (Purchase)": number;
  " _2": string;
  "Points (Hunt)": number;
  "Goal Percentage (Hunt)": number;
  " _3": string;
  "Points (Purchase)": number;
  "Goal Percentage (Purchase)": number;
  " _4": string;
  "First Hunt Time": number;
  "Last Hunt Time": number;
}

export interface UserNormalice {
  id: number;
  name: string;
  L2: number;
  L3: number;
  L4: number;
  L5: number;
  days: number;
  total: number;
}
