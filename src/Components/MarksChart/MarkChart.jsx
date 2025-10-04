import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarkChart = ({marksPromise}) => {
    const markDataRes=use(marksPromise);
    
    const markData=markDataRes.data;
    // Data processing

    const marksChartData=markData.map(studentData=>{
        const student ={

            id:studentData.id,
            name:studentData.name,
            physics:studentData.physics,
            chemistry:studentData.chemistry
        }
        return student;
    })

    console.log(marksChartData);
    return (
        <div>
            <BarChart width={800} height={500} data={marksChartData}>
           <XAxis dataKey="name"></XAxis>
           <YAxis></YAxis>
           <Bar dataKey={'chemistry'} fill='aquamarine'></Bar>

            </BarChart>
        </div>
    );
};

export default MarkChart;