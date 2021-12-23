import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((d) => d.value);
  const totalMaximun = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((d) => (
        <ChartBar
          key={d.label}
          value={d.value}
          maxValue={totalMaximun}
          label={d.label}
        />
      ))}
    </div>
  );
};

export default Chart;
