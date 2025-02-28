import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { Routine } from "@shared/schema";
import RoutineCard from "@/components/RoutineCard";
import { Link } from "wouter";

export default function Home() {
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null);

  const { data: routines, isLoading } = useQuery({
    queryKey: ["/api/routines"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Apex Mobility</h1>
            <Link href="/calendar" className="text-primary hover:text-primary/80">
              View Progress
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {routines?.map((routine) => (
                <RoutineCard
                  key={routine.id}
                  routine={routine}
                  onSelect={setSelectedRoutine}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}