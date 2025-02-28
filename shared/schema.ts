import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const routines = pgTable("routines", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
});

export const exercises = pgTable("exercises", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  routineId: serial("routine_id").references(() => routines.id),
});

export const completions = pgTable("completions", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  completed: boolean("completed").notNull().default(false),
});

// Schemas for insertions
export const insertRoutineSchema = createInsertSchema(routines);
export const insertExerciseSchema = createInsertSchema(exercises);
export const insertCompletionSchema = createInsertSchema(completions);

// Types
export type Routine = typeof routines.$inferSelect;
export type Exercise = typeof exercises.$inferSelect;
export type Completion = typeof completions.$inferSelect;
export type InsertRoutine = z.infer<typeof insertRoutineSchema>;
export type InsertExercise = z.infer<typeof insertExerciseSchema>;
export type InsertCompletion = z.infer<typeof insertCompletionSchema>;