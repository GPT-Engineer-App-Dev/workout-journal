import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Fitness Tracker</h1>
      <p>Track your fitness journey with us.</p>
      <div className="mt-4">
        <div className="flex justify-center space-x-4">
          <div className="p-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl">Steps Taken</h2>
            <p>10,000</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl">Calories Burned</h2>
            <p>500</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl">Active Minutes</h2>
            <p>60</p>
          </div>
        </div>
        <Button className="mt-4">Start New Workout</Button>
      </div>
    </div>
  );
};

export default Index;