import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Select } from "antd";

const { Option } = Select;

const selectOptions = [
  "sales",
  "spends",
  "units",
  "sessions",
  "cvr",
  "avg_price",
  "ntb_orders",
  "sns_orders",
  "buy_box_percentage",
  "tacos",
  "cpc",
];

const dollarValue = ["sales", "spends", "avg_price"];

const numberValue = ["units", "sessions", "ntb_orders", "sns_orders"];

const percentageValue = ["cvr", "buy_box_percentage", "tacos", "cpc"];

const chartData = [
  {
    date: "2024-03-01",
    week: "9",
    month: "3",
    quarter: "1",
    category: "Minerals(Amazon)",
    sales: "52937",
    spends: "7443",
    units: "2649",
    sessions: "517146",
    cvr: "418.42",
    avg_price: "19.98",
    ntb_orders: "976",
    sns_orders: "0",
    buy_box_percentage: "92.87",
    tacos: "14.06",
    cpc: "2.79",
  },
  {
    date: "2024-03-02",
    week: "9",
    month: "3",
    quarter: "1",
    category: "Minerals(Amazon)",
    sales: "53587",
    spends: "7300",
    units: "2622",
    sessions: "512166",
    cvr: "469.83",
    avg_price: "20.44",
    ntb_orders: "754",
    sns_orders: "0",
    buy_box_percentage: "90.38",
    tacos: "13.62",
    cpc: "2.78",
  },
  {
    date: "2024-03-03",
    week: "10",
    month: "3",
    quarter: "1",
    category: "Minerals(Amazon)",
    sales: "62414",
    spends: "7990",
    units: "3016",
    sessions: "556590",
    cvr: "491.03",
    avg_price: "20.69",
    ntb_orders: "724",
    sns_orders: "0",
    buy_box_percentage: "91.22",
    tacos: "12.80",
    cpc: "2.83",
  },
  {
    date: "2024-03-04",
    week: "10",
    month: "3",
    quarter: "1",
    category: "Minerals(Amazon)",
    sales: "59943",
    spends: "7426",
    units: "2941",
    sessions: "652445",
    cvr: "438.05",
    avg_price: "20.38",
    ntb_orders: "1079",
    sns_orders: "0",
    buy_box_percentage: "88.99",
    tacos: "12.39",
    cpc: "2.89",
  },
  {
    date: "2024-03-05",
    week: "10",
    month: "3",
    quarter: "1",
    category: "Minerals(Amazon)",
    sales: "59858",
    spends: "7729",
    units: "2913",
    sessions: "760604",
    cvr: "435.59",
    avg_price: "20.55",
    ntb_orders: "986",
    sns_orders: "0",
    buy_box_percentage: "90.42",
    tacos: "12.91",
    cpc: "2.76",
  },
  {
    date: "2024-03-06",
    week: "10",
    month: "3",
    quarter: "1",
    category: "Minerals(Amazon)",
    sales: "59316",
    spends: "6472",
    units: "2898",
    sessions: "607416",
    cvr: "414.82",
    avg_price: "20.47",
    ntb_orders: "545",
    sns_orders: "0",
    buy_box_percentage: "0.00",
    tacos: "10.91",
    cpc: "2.73",
  },
];

const LineChart = () => {
  const [selectedValues, setSelectedValues] = useState(["sales"]);
  const [seriesData, setSeriesData] = useState([]);
  const [yAxis, setYAxis] = useState([]);

  function getSeriesNameWithHighestLeftDataValue(series) {
    let maxLeftValue = -Infinity;
    let maxLeftSeriesName = "";
    let leftValueNumber = 0;

    // Filter series with type "left" and find the maximum value
    series.forEach((ser) => {
      if (ser.direction === "left") {
        const maxValue = Math.max(...ser.data);
        if (maxValue > maxLeftValue) {
          maxLeftValue = maxValue;
          maxLeftSeriesName = ser.name;
        }
        leftValueNumber++;
      }
    });

    return {
      leftSeriesName: maxLeftSeriesName,
      leftValueNumber: leftValueNumber,
    };
  }

  function getSeriesNameWithHighestRightDataValue(series) {
    let maxRightValue = -Infinity;
    let maxRightSeriesName = "";
    let rightValueNumber = 0;

    // Filter series with type "left" and find the maximum value
    series.forEach((ser) => {
      if (ser.direction === "right") {
        const maxValue = Math.max(...ser.data);
        if (maxValue > maxRightValue) {
          maxRightValue = maxValue;
          maxRightSeriesName = ser.name;
        }
        rightValueNumber++;
      }
    });

    return {
      rightSeriesName: maxRightSeriesName,
      rightValueNumber: rightValueNumber,
    };
  }

  const series = [
    {
      name: "Series 1",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 50],
      direction: "left",
    },
    // {
    //   name: "Series 2",
    //   data: [2, 3, 4, 5, 6, 7, 8, 6, 40],
    //   direction: "right",
    // },
    {
      name: "Series 3",
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
      direction: "right",
    },
    {
      name: "Series 4",
      data: [23, 20, 34, 45, 50, 56, 70, 45, 78],
      direction: "left",
    },
    {
      name: "Series 5",
      data: [23, 20, 34, 45, 50, 56, 70, 45, 418],
      direction: "right",
    },
    // {
    //   name: "Series 6",
    //   data: [23, 20, 34, 45, 50, 56, 70, 45, 98],
    //   direction: "right",
    // },
  ];

  const seriesNameLeft = getSeriesNameWithHighestLeftDataValue(series);

  const { leftSeriesName, leftValueNumber } = seriesNameLeft;

  function generateLeftSeriesObjects(name, leftValueNumber) {
    const seriesObjects = [];
    for (let i = 0; i < leftValueNumber - 1; i++) {
      seriesObjects.push({ seriesName: name, show: false });
    }
    return seriesObjects;
  }

  const generatedLeftObjects = generateLeftSeriesObjects(
    leftSeriesName,
    leftValueNumber
  );

  const seriesNameRight = getSeriesNameWithHighestRightDataValue(series);

  const { rightSeriesName, rightValueNumber } = seriesNameRight;

  function generateRightSeriesObjects(name, leftValueNumber) {
    const seriesObjects = [];
    for (let i = 0; i < leftValueNumber - 1; i++) {
      seriesObjects.push({ seriesName: name, show: false, opposite: true });
    }
    return seriesObjects;
  }

  const generatedRightObjects = generateRightSeriesObjects(
    rightSeriesName,
    rightValueNumber
  );

  const options = {
    chart: {
      type: "line",
      height: 350,
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    // colors: ["#008FFB", "#FF4560", "#FEB019", "3bf6cbe0"],
    stroke: {
      width: [3, 3, 3],
      dashArray: [0, 5, 10],
    },
    title: {
      text: "Line Chart with Dashed Lines",
      align: "left",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    yaxis: [
      {
        seriesName: leftSeriesName,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: "Columns",
        },
      },
      ...generatedLeftObjects,
      {
        opposite: true,
        seriesName: rightSeriesName,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: rightSeriesName,
        },
      },
      ...generatedRightObjects,
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };

  useEffect(() => {
    const filteredSeriesData = Object.keys(chartData[0])
      .filter(
        (key) =>
          !["date", "week", "month", "quarter", "category"].includes(key) &&
          selectedValues.includes(key)
      )
      .map((key) => ({
        name: key.toUpperCase(),
        data: chartData.map((item) => item[key]),
      }));

    setSeriesData(filteredSeriesData);

    const selectedValueCategories = [dollarValue, numberValue, percentageValue];
    const yAxis = [];
    selectedValueCategories.forEach((category) => {
      const selectedInCategory = selectedValues.filter((value) =>
        category.includes(value)
      );

      console.log(selectedInCategory, "selectedInCategory");

      if (selectedInCategory.length === 2) {
        const isSameArray = selectedInCategory.length === 2;

        let maxValue = -Infinity;
        let maxSeriesName = "";

        filteredSeriesData.forEach(({ name, data }) => {
          data.forEach((value) => {
            // Validate value before conversion
            const numericValue = parseFloat(value);
            if (!isNaN(numericValue) && numericValue > maxValue) {
              maxValue = numericValue;
              maxSeriesName = name;
            }
          });
        });

        // Check if maxSeriesName is not an empty string
        if (maxSeriesName) {
          const labelFormatter = (value) => {
            if (category === dollarValue) {
              // Format dollar values with commas
              return `$${value.toLocaleString()}`;
            } else if (category === numberValue) {
              return parseInt(value, 10);
            } else {
              return `${value}%`;
            }
          };

          yAxis.push({
            seriesName: maxSeriesName,
            title: {
              text: `${selectedInCategory[0]?.toUpperCase()} - ${selectedInCategory[1]?.toUpperCase()}`, // Concatenate selected categories
            },
            labels: {
              formatter: labelFormatter,
            },
          });

          // Push second y-axis only if isSameArray is true
          if (isSameArray) {
            yAxis.push({
              seriesName: maxSeriesName,
              show: false,
            });
          }
        }
      } else if (selectedInCategory.length > 0) {
        console.log("second else if ");
        // Only one value selected or values are from different category arrays
        const labelFormatter = (value) => {
          if (category === dollarValue) {
            // Format dollar values with commas
            return `$${value.toLocaleString()}`;
          } else if (category === numberValue) {
            return parseInt(value, 10);
          } else {
            return `${value}%`;
          }
        };

        yAxis.push({
          seriesName: selectedInCategory.join(", ").toUpperCase(),
          opposite: yAxis.length > 0, // Show additional y-axes on the opposite side
          title: {
            text: selectedInCategory.join(", ").toUpperCase(),
          },
          labels: {
            formatter: labelFormatter,
          },
        });
      }
    });

    console.log(yAxis, "yAxis");
    setYAxis(yAxis);
  }, [selectedValues, chartData]);

  const handleChange = (value) => {
    console.log(value, "value");
    // Allow selecting up to two values
    if (value.length <= 2) {
      setSelectedValues(value);
    }
  };

  const chartOptions = {
    // Define your chart options here
    chart: {
      type: "bar",
    },
    xaxis: {
      type: "datetime",
      categories: chartData.map((item) => item.date),
    },
    yaxis: yAxis,
    series: seriesData,
  };

  return (
    <>
      <Select
        mode="multiple"
        className="w-[50%] mb-10"
        placeholder="Select values"
        value={selectedValues}
        onChange={handleChange}
      >
        {selectOptions.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Select>
      {/* <div id="chart">
        <Chart options={options} series={series} type="line" height={350} />
      </div> */}

      <div>
        <h1>My Chart</h1>
        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
};

export default LineChart;
