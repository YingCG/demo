import DashboardBox from '@/components/DashboardBox'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'

type Props = {}

const gridTemplateLargeScreens = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`
const gridTemplateSmallScreens = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`
const Dashboard = (props: Props) => {

    const isAboveMediumScreen = useMediaQuery("(min-width:860px)")
    const {palette} = useTheme();

  return (
    <Box 
    width="100%" 
    height="100%" 
    display="grid" 
    gap="1.5rem" 
    sx={ isAboveMediumScreen? { gridTemplateColumns: "repeat(3, minmax(370, 1fr))",
         gridTemplateRows: "repeat(10, minmax(60px, 1fr))", 
         gridTemplateAreas: gridTemplateLargeScreens}
        : { gridAutoColumns: "1fr",
            gridAutoRows: "80px", 
            gridTemplateAreas: gridTemplateSmallScreens}
        } >
      
      <Row1/>
       {/* <Row2/> */}
        <DashboardBox gridArea="g"></DashboardBox>
        <DashboardBox gridArea="h"></DashboardBox>
        <DashboardBox gridArea="i"></DashboardBox>
        <DashboardBox gridArea="j"></DashboardBox>
    </Box>
  )
}

export default Dashboard