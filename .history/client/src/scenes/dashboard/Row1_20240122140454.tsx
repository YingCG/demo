import ChartHeader from '@/components/ChartHeader';
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import { GetKpisResponse, Month, Day } from '@/state/types'; 
import { useTheme } from "@mui/material";
import React, { useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

type Props = {}

const Row1 = () => {
    const { palette } = useTheme();
    const {data} = useGetKpisQuery()
    const kpisData: GetKpisResponse[] | undefined = data;

    console.log('data:', kpisData);

    const revenueExpenses = useMemo(() => {
      return(
        kpisData  && kpisData [0].monthlyData.map(({month, revenue, expenses}) => {
          return {
            name: month.substring(0, 3),
            revenue: revenue,
            expenses: expenses
          }
        })
      )

    }, [kpisData])

    const revenueProfit = useMemo(() => {
      return (
        kpisData  && kpisData [0].monthlyData.map(({month, revenue, expenses}) => {
          return {
            name: month.substring(0, 3),
            revenue: revenue,
            profit: (revenue - expenses).toFixed(2),
          }
        })
      )
    }, [kpisData ])

    const revenue = useMemo(() => {
      return (
        kpisData  &&
        kpisData [0].monthlyData.map(({ month, revenue }) => {
          return {
            name: month.substring(0, 3),
            revenue: revenue,
          };
        })
      );
    }, [kpisData ]);

  return (
    <>
      <DashboardBox gridArea="a">
        <ChartHeader title='Revenue and Expensed' subtitle='this show the revenue and expensed of the month'/>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
           <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3}/>
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: '10px'}}/>
          <YAxis tickLine={false} axisLine={{strokeWidth: '0'}} style={{ fontSize: '10px'}} domain={[8000, 23000]}/>
          <Tooltip />
          <Area type="monotone" dataKey="revenue" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
          <Area type="monotone" dataKey="expenses" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
        </AreaChart>
      </ResponsiveContainer>
      </DashboardBox>


      <DashboardBox gridArea="b">
      <ChartHeader  title="Profit and Revenue" subtitle="top line represents revenue, bottom line represents expenses"/>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={revenueProfit}
          margin={{  top: 15,  right: 25,  left: -10,  bottom: 60,  }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3}/>
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: '10px'}}/>
          <YAxis tickLine={false} axisLine={{strokeWidth: '0'}} style={{ fontSize: '10px'}} />
          <Tooltip />
          <Legend height={20} wrapperStyle={{margin: "0 0 10px 0"}} />
          <Line type="monotone" dataKey="profit" stroke={palette.tertiary[500]} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="revenue" stroke={palette.primary.main} />
        </LineChart>
      </ResponsiveContainer>
      </DashboardBox>


      <DashboardBox gridArea="c">
      <ChartHeader  title="Revenue Month by Month"
          subtitle="graph representing the revenue month by month"/>

      <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default Row1
