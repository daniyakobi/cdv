import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2"

const LineChart= ({ labels, values }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        label: "Вероятность",
        borderColor: "#FFDEA0",
        fill: true,
        lineTension: 0.5
      }
    ]
  }

  return (
    <Line
      type="line"
      options={{
        title: {
          display: true,
          text: "Оценка активности пользователя",
          fontSize: 18
        },
        legend: {
          display: true,
          position: "top"
        }
      }}
      data={ data }
    />
  )
}

export default LineChart