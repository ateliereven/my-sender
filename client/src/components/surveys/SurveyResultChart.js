import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-labels'; //this plugin requires older versions of react-chartjs-2 and chart.js (<3)


const SurveyResultChart = (props) => {
    const data = {
        datasets: [{
            data: props.data,
            backgroundColor: props.colors,
            borderWidth: 0
        }],
        labels: props.labels
    }
    const options = {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        datalabels: {
            display: true,
            color: "white",
          },
        plugins: { 
            labels: {
                render: 'percentage',
                fontColor: '#37474f',
                fontFamily: "Lato,'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                fontStyle: 'bold',
                fontSize: 12,
                precision: 0
            }
        }
    }
    return (
        <div style={{ width: `${props.width}px` }}>
            <Doughnut
                height={props.height}
                width={props.width}
                data={data}
                options={options}
            />
        </div>
    )
}

export default SurveyResultChart;