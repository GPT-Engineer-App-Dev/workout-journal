import { Button } from "@/components/ui/button";

const Goals = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Goals</h1>
      <p>List of current fitness goals and progress.</p>
      <div className="mt-4">
        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="text-xl">Current Goals</h2>
          <p>Details about current goals...</p>
        </div>
        <Button className="mt-4">Add or Edit Goals</Button>
      </div>
    </div>
  );
};

export default Goals;