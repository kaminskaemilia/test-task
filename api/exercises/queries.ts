import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import client from '../client';
import {WorkoutPlan} from "@/api/exercises/interfaces";
import localWorkoutPlanData from '../local-workout-plan-data.json';


const getWorkoutPlan = async (): Promise<WorkoutPlan> => {
  const {data} = await client.get(`workout-planner/exercises?lang=ENG`);
  return data;
};

export const useWorkoutPlan = (): UseQueryResult<WorkoutPlan, void> =>
  useQuery({
    queryKey: ['workoutPlan'],
    queryFn: getWorkoutPlan,
  });

const getLocalWorkoutPlan = async (): Promise<WorkoutPlan> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(localWorkoutPlanData);
        }, 500);
    });
};

export const useLocalWorkoutPlan = (): UseQueryResult<WorkoutPlan, void> =>
    useQuery({
        queryKey: ['localWorkoutPlan'],
        queryFn: getLocalWorkoutPlan,
        staleTime: Infinity,
    });


