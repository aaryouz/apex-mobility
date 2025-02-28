import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import type { Completion } from "@shared/schema";

export default function Calendar() {
  const queryClient = useQueryClient();
  const today = new Date();

  const { data: completion } = useQuery<Completion>({
    queryKey: [`/api/completions/${format(today, 'yyyy-MM-dd')}`],
  });

  const createCompletion = useMutation({
    mutationFn: async () => {
      await apiRequest('POST', '/api/completions', {
        date: today,
        completed: true
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/completions'] });
    },
  });

  const modifiers = {
    completed: (date: Date) => {
      const dateStr = format(date, 'yyyy-MM-dd');
      return completion?.date === dateStr && completion?.completed;
    }
  };

  const modifiersStyles = {
    completed: { color: 'white', backgroundColor: 'hsl(var(--primary))' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Progress Calendar</h1>
            <Link href="/" className="text-primary hover:text-primary/80">
              Back to Routines
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col items-center space-y-6">
            <DayPicker
              mode="single"
              defaultMonth={today}
              selected={today}
              modifiers={modifiers}
              modifiersStyles={modifiersStyles}
            />
            
            <Button
              onClick={() => createCompletion.mutate()}
              disabled={completion?.completed}
              className="w-full max-w-xs"
            >
              <Check className="mr-2 h-4 w-4" />
              Mark Today Complete
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
