import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function BarChart({ token }) {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/filerequests`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setFiles(data.data);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  let numberInProgress = 0;
  let numberRefused = 0;

  const numReady = () => {
    var numberReady = 0;
    files
      ?.map((file) => {
        if (file.status === "Ready") {
          numberReady = numberReady + 1;
        }
      })
    return numberReady
  }

  console.log("nnnnn: " + numReady);

  var data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels: ["Ready", "In Progress", "Refused"],
    datasets: [
      {
        label: "# of Votes",
        data: [numReady, 10, 5,],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 3,
        barPercentage: 1.0,

      },
    ],
  };

  var options = {
    indexAxis: 'x',
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          display: true,
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
        }
      }
    }
  };

  return (
    <div>
      <Bar data={data} options={options} height={400} width={600} />
    </div>
  );
}

export default BarChart;
