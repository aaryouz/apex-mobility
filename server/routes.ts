import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCompletionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all routines
  app.get("/api/routines", async (_req, res) => {
    const routines = await storage.getRoutines();
    res.json(routines);
  });

  // Get exercises for a specific routine
  app.get("/api/routines/:id/exercises", async (req, res) => {
    const routineId = parseInt(req.params.id);
    const exercises = await storage.getExercisesByRoutine(routineId);
    res.json(exercises);
  });

  // Get completion status for a specific date
  app.get("/api/completions/:date", async (req, res) => {
    const date = new Date(req.params.date);
    const completion = await storage.getCompletionByDate(date);
    res.json(completion || { completed: false, date });
  });

  // Create or update completion status
  app.post("/api/completions", async (req, res) => {
    const result = insertCompletionSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ error: result.error });
      return;
    }

    const completion = await storage.createCompletion(result.data);
    res.json(completion);
  });

  // Update completion status
  app.patch("/api/completions/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const { completed } = req.body;

    const completion = await storage.updateCompletion(id, completed);
    res.json(completion);
  });

  const httpServer = createServer(app);
  return httpServer;
}