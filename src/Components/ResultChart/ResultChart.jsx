import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData=[
  { "id": 1, "name": "Ayesha Rahman", "physics": 85, "chemistry": 78, "math": 92 },
  { "id": 2, "name": "Tanjina Hasan", "physics": 76, "chemistry": 82, "math": 88 },
  { "id": 3, "name": "Nabila Chowdhury", "physics": 90, "chemistry": 87, "math": 95 },
  { "id": 4, "name": "Rima Akter", "physics": 69, "chemistry": 74, "math": 80 },
  { "id": 5, "name": "Sumaiya Hasan", "physics": 88, "chemistry": 91, "math": 85 },
  { "id": 6, "name": "Farzana Karim", "physics": 73, "chemistry": 68, "math": 70 },
  { "id": 7, "name": "Meherin Noor", "physics": 95, "chemistry": 89, "math": 97 },
  { "id": 8, "name": "Liza Ahmed", "physics": 64, "chemistry": 72, "math": 78 },
  { "id": 9, "name": "Sanjida Sultana", "physics": 81, "chemistry": 85, "math": 83 },
  { "id": 10, "name": "Madiha Khan", "physics": 92, "chemistry": 88, "math": 90 }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={1300} height={500} data={resultData}>

                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>

                <Line dataKey="math" stroke='red'></Line>
                 <Line dataKey="chemistry" stroke='aquamarine'></Line>
                  <Line dataKey="physics" stroke='yellow'></Line>
            </LineChart>

            
        </div>
    );
};

export default ResultChart;