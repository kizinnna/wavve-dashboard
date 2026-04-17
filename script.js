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
  data: {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
    datasets: [
      {
        type: "bar",
        label: "2024년 수익",
        data: [1.2, 1.4, 1.5, 1.3, 1.1, 1.2],
        backgroundColor: "#e5e7eb",
        borderRadius: 8
      },
      {
        type: "bar",
        label: "2025년 수익",
        data: [1.45, 1.58, 2.29, 1.57, 0.8, 1.55],
        backgroundColor: "#9dbdff",
        borderRadius: 8
      },
      {
        type: "line",
        label: "2024년 매출",
        data: [15.5, 15.2, 14.0, 14.7, 14.5, 14.2],
        borderColor: "#bfd3ff",
        backgroundColor: "#bfd3ff",
        tension: 0.35,
        borderWidth: 3
      },
      {
        type: "line",
        label: "2025년 매출",
        data: [13.1, 13.9, 13.8, 13.9, 14.8, 14.7],
        borderColor: "#2f5fd0",
        backgroundColor: "#2f5fd0",
        tension: 0.35,
        borderWidth: 3
      }
    ]
  },
  options: defaultOptions
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
  options: defaultOptions
});

new Chart(document.getElementById("shareChart"), {
  type: "doughnut",
  data: {
    labels: ["KBS", "MBC", "SBS", "기타"],
    datasets: [
      {
        data: [14.7, 22.8, 29.0, 32.2],
        backgroundColor: ["#2f5fd0", "#8db1ff", "#bfd3ff", "#e5e7eb"],
        borderWidth: 0
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "68%"
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
        borderWidth: 3
      }
    ]
  },
  options: defaultOptions
});

new Chart(document.getElementById("programChart"), {
  type: "bar",
  data: {
    labels: ["가는정 오는정 이민정", "우리 연애 시뮬레이션", "연애의 참견", "러브 메이트", "스카우트6"],
    datasets: [
      {
        label: "매출",
        data: [214, 168, 131, 86, 64],
        backgroundColor: "#2f5fd0",
        borderRadius: 10
      }
    ]
  },
  options: {
    indexAxis: "y",
    ...defaultOptions,
    scales: {
      x: {
        grid: { color: "#f1f5f9" },
        ticks: { color: "#6b7280" }
      },
      y: {
        grid: { display: false },
        ticks: { color: "#6b7280" }
      }
    }
  }
});