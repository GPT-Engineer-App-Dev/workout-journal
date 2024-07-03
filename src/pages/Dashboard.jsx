import { useQuery } from "@tanstack/react-query";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const fetchProgressData = async () => {
  const response = await fetch("/api/progress");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["progressData"],
    queryFn: fetchProgressData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="text-center">
      <h1 className="text-3xl">Dashboard</h1>
      <p>Overview of your fitness stats.</p>
      <div className="mt-4">
        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="text-xl">Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.weeklyActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="steps" stroke="#8884d8" />
              <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg mt-4">
          <h2 className="text-xl">Heart Rate</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.heartRate}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bpm" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg mt-4">
          <h2 className="text-xl">Sleep Patterns</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.sleepPatterns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="hours" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;