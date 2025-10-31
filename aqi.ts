import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function AQIChart() {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const aqiRef = ref(db, 'aqi');
    onValue(aqiRef, (snapshot) => {
      const values = [];
      snapshot.forEach(child => {
        values.push(child.val().airQuality);
      });
      setDataPoints(values.slice(-20));
    });
  }, []);

  const chartData = {
    labels: dataPoints.map((_, i) => `T-${i}`),
    datasets: [{
      label: 'Air Quality',
      data: dataPoints,
      borderColor: 'rgba(75,192,192,1)',
      fill: false
    }]
  };

  return <Line data={chartData} />;
}