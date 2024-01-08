import React,{useState,useEffect} from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend  } from 'recharts';
const Barstacked = () => {
  const [chartWidth, setChartWidth] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth <= 768 ? 280 : 420);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    const CustomLegend = (props) => {
        const { payload } = props;
        return (
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
            {payload.map((entry, index) => (
              <li key={`item-${index}`} style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
                <svg width={10} height={10} style={{ marginRight: 5 }}>
                  <rect width={10} height={10} fill={entry.color} stroke="#000" strokeWidth={2} />
                </svg>
                <span style={{ color: entry.value === 'Custom Name 1' ? 'black' : 'inherit', fontSize: '12px' }}>
                  {entry.value}
                </span>
              </li>
            ))}
          </ul>
        );
      };
      
    const data = [
        { name: '20', x: 20, y: 20, z: 20 },
        { name: '', x: 30, y: 30, z: 30 },
        { name: '25', x: 30, y: 30, z: 40 },
        { name: '', x: 33, y: 33, z: 43 },
        { name: '30', x: 35, y: 35, z: 50 },
        { name: '', x: 35, y: 38, z: 70 },
        { name: '35', x: 38, y: 40, z: 80 },
        { name: '', x: 40, y: 44, z: 100 },
        { name: '40', x: 42, y: 48, z: 120 },
        { name: '', x: 50, y: 60, z: 120 },
        { name: '60', x: 60, y: 70, z: 135 },
        { name: '', x: 70, y: 78, z: 140 },
        { name: '65', x: 90, y: 90, z: 140 },
    ];
    const customYAxisTicks = [0,100,200,300];
    const formatYAxisTick = (value) => `$${value}`;
  return (
    <div className="">
        <h5 className='fw-bold mt-2'>Contribution Overtime</h5>
        <BarChart width={chartWidth} height={300} data={data}  >
            <Legend
            content={<CustomLegend />}
                layout="horizontal"
                align="center"
                verticalAlign="top"
                iconType="square"
                payload={[
                { value: 'Emplyer : K 73,500', type: 'square', id: 'x', color: '#0300A3' },
                { value: 'Employee: K 52,500', type: 'square', id: 'y', color: '#4935FF' },
                { value: 'Total Interest : K 244,313', type: 'square', id: 'z', color: '#85AFFF' },
                ]}
            />
            <CartesianGrid horizontal={true} vertical={false} stroke="#eee" strokeDasharray="5 5"  />
            <XAxis axisLine={{ stroke: 'transparent' }} tick={{ fontSize: '12px',fontWeight:'bold' }} dataKey="name" />
            <YAxis axisLine={{ stroke: 'transparent' }} tick={{ fontSize: '12px',fontWeight:'bold' }} ticks={customYAxisTicks} tickFormatter={formatYAxisTick} />
            <Bar dataKey="x" stackId="a" fill="#0300A3" />
            <Bar dataKey="y" stackId="a" fill="#4935FF" />
            <Bar dataKey="z" stackId="a" fill="#85AFFF" />
    </BarChart>
    </div>
  )
}

export default Barstacked