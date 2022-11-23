import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { PolarArea } from "react-chartjs-2"

const PolarChart= ({ values }) => {
  const data = {
    labels: ['Положительные', 'Нейтральные', 'Негативные'],
    datasets: [
      {
        data: [values.positive, values.neutral, values.negative],
        label: "Комментарии пользователя",
        backgroundColor: ["#33FF3B", "#FFDEA0", "#FF4545"],
      }
    ]
  }

  return (
    <PolarArea
      options={{
        title: {
          display: true,
          text: "Комментарии пользователя",
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

export default PolarChart