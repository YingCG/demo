export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: string;
  expenses: string;
  nonOperationalExpenses: string;
  operationalExpenses: string;
}

export interface Day {
  id: string;
  date: string;
  revenue: string;
  expenses: string;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: string;
  totalRevenue: string;
  totalExpenses: string;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: string;
  expense: string;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: string;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}
