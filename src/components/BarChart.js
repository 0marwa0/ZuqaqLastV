import React from "react";
import { Line, Doughnut,Bar } from "react-chartjs-2";
import Chart from "chart.js"
const data = {

  labels: ['Bgh Mal', 'AmrSt', 'Station', 'Bgh Aripot'],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      legend:false,

       backgroundColor: [
        "blue",
        "red",
        "#FFCE56",
        "#3366cc"
      ],
      border:false,
      // borderColor: "rgba(75,192,192,1)",
      // borderCapStyle: "butt",
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81],
    }
  ]
};
export const Dunt=()=>{


return


  // return   <Doughnut data={data} width={250} height={132}
  //                              options={{

  //       responsive: true,
  //                                     title: {
  //                                   display: true,
  //                                     fontSize: 10
  //                                     },
  //                                    maintainAspectRatio: false,
  //                                    legend: {
  //                                    display:false,
  //                                    position: "left",
  //                                    backgroundColor:"red"
  //                                     },
  //                                     cutoutPercentage: 80
  //                                    }}
  //   />
}
export const Bars =()=>{
  return  <Bar data={data} width={250} height={132}
  style={{padding:0,margin:0}}
  options={{
       scales: {
          xAxes: [{
            display: true, gridLines: {
                drawOnChartArea: false
            },

          }],
          yAxes: [{
            type: "linear",
            display: true,
            gridLines: {
                drawOnChartArea: false
            },
            position: "left"
          }]
        },
        responsive: true,
                                      title: {
                                    display: true,
                                      fontSize: 10
                                      },
                                     maintainAspectRatio: false,
                                     legend: {
                                     display:false,
                                     position: "left",
                                     backgroundColor:"red"
                                      },
                                      cutoutPercentage: 80
                                     }}
    />
}
export default class Hello extends React.Component {


  componentDidMount() {

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
        options: {
         cutoutPercentage: 70,
 elements: {
      center: {
        text: 'Red is 2/3 of the total numbersed is 2/3 of the total numbers',
        color: '#FF6384', // Default is #000000
        fontStyle: 'Arial', // Default is Arial
        sidePadding: 2, // Default is 20 (as a percentage)
        minFontSize:1, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 2 // Default is 25 (in px), used for when text wraps
      }
    },



           responsive: true,
 legend: {
        display: false
    },},
    data: {
       pointBorderWidth: 1,
        labels: ['Bgh Mal', 'AmrSt', 'Station', 'Bgh Aripot'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
});
}
  render() {

    return (
      <div style={{width:"80%",
      position:"relative"
      }} >
        <canvas  id="myChart" width="50" height="50"
        style={{padding:0,margin:0}}
       >


       </canvas>
      <p style={{position:"absolute",top:"40%",left:"35%",fontSize:"18px"}} >400M</p>

      </div>
    );
  }
}
