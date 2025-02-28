import { type Routine } from "@shared/schema";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RoutineCardProps {
  routine: Routine;
  onSelect: (routine: Routine) => void;
}

export default function RoutineCard({ routine, onSelect }: RoutineCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <h3 className="text-lg font-semibold">{routine.name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{routine.description}</p>
        <Button 
          onClick={() => onSelect(routine)}
          className="w-full"
        >
          Start Routine
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
