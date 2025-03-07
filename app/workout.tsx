import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import "../global.css";
import { useLocalWorkoutPlan, useWorkoutPlan } from "@/api/exercises/queries";
import BackArrow from "@/assets/images/back-arrow";
import WorkoutCard from "@/components/custom/WorkoutCard";
import ExerciseItem from "@/components/custom/ExerciseItem";
import DraggableFlatList from "react-native-draggable-flatlist";
import { Exercise } from "@/api/exercises/interfaces";

export default function WorkoutScreen() {
    const { data: workoutPlan, isLoading, error } = useWorkoutPlan();
    const [currentExerciseTitle, setCurrentExerciseTitle] = useState<string | null>(null);
    const { data: localWorkoutPlan } = useLocalWorkoutPlan();
    const [exercisesList, setExercisesList] = useState<Exercise[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [showSaveChangesModal, setShowSaveChangesModal] = useState(false);

    useEffect(() => {
        if (localWorkoutPlan?.exercises?.length) {
            setExercisesList(localWorkoutPlan.exercises);
            if (!currentExerciseTitle) {
                setCurrentExerciseTitle(localWorkoutPlan.exercises[0]?.name || null);
            }
        }
    }, [localWorkoutPlan]);

    const currentExercise = React.useMemo(() => {
        if (!exercisesList?.length || !currentExerciseTitle) return null;
        return exercisesList.find(exercise => exercise.name === currentExerciseTitle) || null;
    }, [exercisesList, currentExerciseTitle]);

    const handleRemoveExercise = (title: string) => {
        const updatedList = exercisesList.filter(exercise => exercise.name !== title);
        setExercisesList(updatedList);

        if (currentExerciseTitle === title) {
            setCurrentExerciseTitle(updatedList[0]?.name || null);
        }

        setShowSaveChangesModal(true);
    };

    const toggleEditMode = () => {
        if (isEditing) {
            setShowSaveChangesModal(true);
        } else {
            setIsEditing(true);
        }
    };

    const onLongPress = ({ nativeEvent }: { nativeEvent: { state: number } }) => {
        if (nativeEvent.state === State.ACTIVE) {
            toggleEditMode();
        }
    };

    const saveChanges = () => {
        setIsEditing(false);
        setShowSaveChangesModal(false);
    };

    const discardChanges = () => {
        if (localWorkoutPlan?.exercises?.length) {
            setExercisesList(localWorkoutPlan.exercises);
        }
        setIsEditing(false);
        setShowSaveChangesModal(false);
    };

    const handleExerciseSelect = (title: string) => {
        setCurrentExerciseTitle(title);
    };

    if (isLoading && !localWorkoutPlan) {
        return (
            <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center">
                <ActivityIndicator size="large" color="#FFD700" />
                <Text className="mt-4 text-gray-600">Loading workout plan...</Text>
            </SafeAreaView>
        );
    }

    if (error && !localWorkoutPlan) {
        return (
            <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center p-4">
                <Ionicons name="alert-circle-outline" size={50} color="#FF6B6B" />
                <Text className="mt-4 text-lg font-bold text-center">Error loading workout plan</Text>
                <Text className="mt-2 text-gray-600 text-center">Please check your connection and try again</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-[#F3F2F7]">
            <View className="px-4 py-2 flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <TouchableOpacity className="p-2">
                        <BackArrow />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold ml-2"
                          style={{ fontFamily: 'Manrope600' }}>{`Chris' ${localWorkoutPlan?.workout_name || 'Workout'}`}</Text>
                </View>
            </View>

            <LongPressGestureHandler
                onHandlerStateChange={onLongPress}
                minDurationMs={500}
            >
                <View className="mb-2.5">
                    <DraggableFlatList
                        data={exercisesList}
                        keyExtractor={(item, index) => `draggable-item-${index}`}
                        onDragEnd={({ data }) => setExercisesList(data)}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        containerStyle={{ paddingVertical: 8, paddingHorizontal: 8 }}
                        activationDistance={10}
                        renderItem={({ item, drag, isActive }) => {
                            const isCompletedExercise = exercisesList.findIndex(ex => ex.name === item.name) < exercisesList.findIndex(ex => ex.name === currentExerciseTitle);
                            return (
                                <TouchableOpacity
                                    onPress={() => handleExerciseSelect(item.name)}
                                    activeOpacity={0.7}
                                >
                                    <ExerciseItem
                                        title={item.name || ''}
                                        currentExerciseTitle={currentExerciseTitle}
                                        exercise={item}
                                        onPress={handleExerciseSelect}
                                        isEditing={isEditing}
                                        onRemove={handleRemoveExercise}
                                        dragRef={drag}
                                        isCompletedExercise={isCompletedExercise}
                                    />
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </LongPressGestureHandler>

            <ScrollView className="flex-1">
                {currentExercise && (
                    <WorkoutCard
                        name={currentExercise.name}
                        gifAssetUrl={currentExercise.gif_asset_url}
                        equipment={currentExercise.equipment}
                        onReplace={() => console.log("Replace clicked")}
                        onInstructionsPress={() => console.log("Instructions clicked")}
                        onWarmUpPress={() => console.log("Warm Up clicked")}
                        onFaqPress={() => console.log("FAQ clicked")}
                    />
                )}
            </ScrollView>

            <Modal
                transparent={true}
                visible={showSaveChangesModal}
                animationType="fade"
            >
                <View className="flex-1 justify-end items-center p-4 mb-5">
                    <View className="bg-white p-2 rounded-full w-4/5 ">
                        <View className="flex-row justify-between">
                            <TouchableOpacity
                                className="mr-2 flex-1"
                                onPress={discardChanges}
                            >
                                <Text className="bg-[#F3F2F7] py-3 px-5 rounded-full text-center font-medium" style={{ fontFamily: 'Manrope500' }}>Discard</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                className="ml-2 flex-1"
                                onPress={saveChanges}
                            >
                                <Text className="bg-[#FFE74C] text-center font-medium py-3 px-5 rounded-full" style={{ fontFamily: 'Manrope500' }}>Save Changes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}