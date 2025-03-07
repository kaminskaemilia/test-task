export interface WorkoutPlan {
    workout_name: string;
    exercises: Exercise[];
}

export interface Exercise {
    name: string;
    gif_asset_url: string;
    equipment: string;
}
