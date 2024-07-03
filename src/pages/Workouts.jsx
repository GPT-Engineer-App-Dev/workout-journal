import { Button } from "@/components/ui/button";

const Workouts = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Workouts</h1>
      <p>List of past workouts and option to add a new workout.</p>
      <div className="mt-4">
        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="text-xl">Past Workouts</h2>
          <p>Details about past workouts...</p>
        </div>
        <Button className="mt-4">Add New Workout</Button>
      </div>
    </div>
  );
};

export default Workouts;