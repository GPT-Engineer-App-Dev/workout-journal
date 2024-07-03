import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LogWorkout = () => {
  const [workout, setWorkout] = useState({
    exerciseType: "",
    duration: "",
    intensity: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(workout);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Log Workout</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="exerciseType" className="block text-sm font-medium text-gray-700">
                Exercise Type
              </label>
              <Input
                id="exerciseType"
                name="exerciseType"
                value={workout.exerciseType}
                onChange={handleChange}
                placeholder="Enter exercise type"
                required
              />
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                Duration (minutes)
              </label>
              <Input
                id="duration"
                name="duration"
                type="number"
                value={workout.duration}
                onChange={handleChange}
                placeholder="Enter duration"
                required
              />
            </div>
            <div>
              <label htmlFor="intensity" className="block text-sm font-medium text-gray-700">
                Intensity
              </label>
              <Select name="intensity" onValueChange={(value) => setWorkout((prevWorkout) => ({ ...prevWorkout, intensity: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select intensity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Notes
              </label>
              <Textarea
                id="notes"
                name="notes"
                value={workout.notes}
                onChange={handleChange}
                placeholder="Enter any additional notes"
              />
            </div>
            <Button type="submit" className="w-full">
              Log Workout
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogWorkout;