import { 
  routines, exercises, completions,
  type Routine, type Exercise, type Completion,
  type InsertRoutine, type InsertExercise, type InsertCompletion 
} from "@shared/schema";

export interface IStorage {
  // Routine operations
  getRoutines(): Promise<Routine[]>;
  getRoutineById(id: number): Promise<Routine | undefined>;
  createRoutine(routine: InsertRoutine): Promise<Routine>;

  // Exercise operations
  getExercisesByRoutine(routineId: number): Promise<Exercise[]>;
  createExercise(exercise: InsertExercise): Promise<Exercise>;

  // Completion operations
  getCompletionByDate(date: Date): Promise<Completion | undefined>;
  createCompletion(completion: InsertCompletion): Promise<Completion>;
  updateCompletion(id: number, completed: boolean): Promise<Completion>;

  //User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private routines: Map<number, Routine>;
  private exercises: Map<number, Exercise>;
  private completions: Map<number, Completion>;
  private users: Map<number, User>;
  private currentRoutineId: number;
  private currentExerciseId: number;
  private currentCompletionId: number;
  private currentId: number;

  constructor() {
    this.routines = new Map();
    this.exercises = new Map();
    this.completions = new Map();
    this.users = new Map();
    this.currentRoutineId = 1;
    this.currentExerciseId = 1;
    this.currentCompletionId = 1;
    this.currentId = 1;

    // Initialize with default routines
    this.initializeDefaultData();
  }

  private async initializeDefaultData() {
    // Add default routines
    const routineData = [
      { name: 'Wake Up', description: 'Start your day with energizing movements' },
      { name: 'Full Body', description: 'Complete body mobility workout' },
      { name: 'Posture Reset', description: 'Reset your posture and alignment' },
      { name: 'Sleep', description: 'Gentle movements to prepare for rest' },
      { name: 'Expert', description: 'Advanced mobility sequences' }
    ];

    for (const routine of routineData) {
      await this.createRoutine(routine);
    }
  }

  async getRoutines(): Promise<Routine[]> {
    return Array.from(this.routines.values());
  }

  async getRoutineById(id: number): Promise<Routine | undefined> {
    return this.routines.get(id);
  }

  async createRoutine(insertRoutine: InsertRoutine): Promise<Routine> {
    const id = this.currentRoutineId++;
    const routine: Routine = { ...insertRoutine, id };
    this.routines.set(id, routine);
    return routine;
  }

  async getExercisesByRoutine(routineId: number): Promise<Exercise[]> {
    return Array.from(this.exercises.values()).filter(
      (exercise) => exercise.routineId === routineId
    );
  }

  async createExercise(insertExercise: InsertExercise): Promise<Exercise> {
    const id = this.currentExerciseId++;
    const exercise: Exercise = { ...insertExercise, id };
    this.exercises.set(id, exercise);
    return exercise;
  }

  async getCompletionByDate(date: Date): Promise<Completion | undefined> {
    return Array.from(this.completions.values()).find(
      (completion) => completion.date.toDateString() === date.toDateString()
    );
  }

  async createCompletion(insertCompletion: InsertCompletion): Promise<Completion> {
    const id = this.currentCompletionId++;
    const completion: Completion = { ...insertCompletion, id };
    this.completions.set(id, completion);
    return completion;
  }

  async updateCompletion(id: number, completed: boolean): Promise<Completion> {
    const completion = this.completions.get(id);
    if (!completion) {
      throw new Error('Completion not found');
    }
    const updatedCompletion = { ...completion, completed };
    this.completions.set(id, updatedCompletion);
    return updatedCompletion;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();

import { users, type User, type InsertUser } from "@shared/schema";