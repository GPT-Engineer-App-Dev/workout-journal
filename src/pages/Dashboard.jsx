const Dashboard = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Dashboard</h1>
      <p>Overview of your fitness stats.</p>
      <div className="mt-4">
        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="text-xl">Weekly Activity</h2>
          <p>Details about weekly activity...</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg mt-4">
          <h2 className="text-xl">Heart Rate</h2>
          <p>Details about heart rate...</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg mt-4">
          <h2 className="text-xl">Sleep Patterns</h2>
          <p>Details about sleep patterns...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;