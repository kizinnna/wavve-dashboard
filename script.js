const chartFont = {
  family: "Pretendard, Noto Sans KR, Arial"
};

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        font: chartFont
      }
    }
  },
  scales: {
    x: {
      grid: { color: "#f1f5f9" },
      ticks: { color: "#6b7280" }
    },
    y: {
      grid: { color: "#f1f5f9" },
      ticks: { color: "#6b7280" }
    }
  }
};

new Chart(document.getElementById("trendChart"), {
  type: "line",
  data: {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: [
      {
        label: "2024년 매출",
        data: [13.6, 13.4, 12.9, 13.2, 13.1, 12.8, 12.7, 12.9, 12.6, 12.8, 12.8, 12.9],
        borderColor: "#bfd3ff",
        backgroundColor: "#bfd3ff",
        tension: 0.35,
        borderWidth: 3,
        pointRadius: 3
      },
      {
        label: "2025년 매출",
        data: [13.1, 13.9, 13.8, 13.9, 14.8, 14.7, null, null, null, null, null, null],
        borderColor: "#2f5fd0",
        backgroundColor: "#2f5fd0",
        tension: 0.35,
        borderWidth: 3,
        pointRadius: 4
      }
    ]
  },
  options: {
    ...defaultOptions,
    scales: {
      x: {
        grid: { color: "#f1f5f9" },
        ticks: { color: "#6b7280" }
      },
      y: {
        min: 12.2,
        max: 15.2,
        ticks: {
          color: "#6b7280",
          stepSize: 0.5
        },
        grid: { color: "#f1f5f9" }
      }
    }
  }
});

new Chart(document.getElementById("subscriberChart"), {
  type: "bar",
  data: {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: [
      {
        label: "2024년",
        data: [232, 228, 223, 219, 214, 210, 208, 206, 205, 203, 202, 201],
        backgroundColor: "#e5e7eb",
        borderRadius: 8
      },
      {
        label: "2025년",
        data: [226.8, 219.7, 207.7, 202.8, 199.5, 197.7, null, null, null, null, null, null],
        backgroundColor: "#2f5fd0",
        borderRadius: 8
      }
    ]
  },
  options: {
    ...defaultOptions,
    scales: {
      x: {
        grid: { color: "#f1f5f9" },
        ticks: { color: "#6b7280" }
      },
      y: {
        min: 190,
        max: 235,
        ticks: {
          color: "#6b7280",
          stepSize: 5
        },
        grid: { color: "#f1f5f9" }
      }
    }
  }
});

new Chart(document.getElementById("shareTrendChart"), {
  type: "line",
  data: {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
    datasets: [
      {
        label: "KBS 점유율",
        data: [15.3, 15.1, 14.9, 14.8, 14.6, 14.7],
        borderColor: "#2f5fd0",
        backgroundColor: "#2f5fd0",
        tension: 0.35,
        borderWidth: 3,
        pointRadius: 4
      }
    ]
  },
  options: {
    ...defaultOptions,
    scales: {
      x: {
        grid: { color: "#f1f5f9" },
        ticks: { color: "#6b7280" }
      },
      y: {
        min: 14.0,
        max: 15.6,
        ticks: {
          color: "#6b7280",
          stepSize: 0.2
        },
        grid: { color: "#f1f5f9" }
      }
    }
  }
});