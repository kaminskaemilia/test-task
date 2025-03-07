import React from "react";
import { Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CheckCircleIcon from "@/assets/images/check-circle";
import PlayCircleIcon from "@/assets/images/play-circle";
import RemoveIcon from "@/assets/images/remove";

interface ExerciseItemProps {
    title: string;
    currentExerciseTitle: string | null;
    exercise: {
        name?: string;
        gif_asset_url: string;
    };
    onPress: (title: string) => void;
    isEditing: boolean;
    onRemove: (title: string) => void;
    dragRef?: any;
    isCompletedExercise: boolean;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({
                                                       title,
                                                       currentExerciseTitle,
                                                       exercise,
                                                       onPress,
                                                       isEditing,
                                                       onRemove,
                                                       dragRef,
                                                       isCompletedExercise,
                                                   }) => {

    const handleRemove = () => {
        onRemove(title);
    };

    const handlePress = () => {
        if (!isEditing) {
            onPress(title);
        }
    };

    const isCurrentExercise = title === currentExerciseTitle;

    return (
        <View className="items-center mx-2 relative">
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handlePress}
                {...(isEditing && { onLongPress: dragRef, delayLongPress: 200 })}
            >
                <View
                    className={`relative w-[64px] h-[64px] p-1 rounded-full overflow-hidden ${
                        isCurrentExercise ? "border-2 border-[#FFE74C]" : "border-2 border-white"
                    }`}
                >
                    {exercise.gif_asset_url && (
                        <Image
                            source={{ uri: exercise.gif_asset_url }}
                            className="w-full h-full rounded-full"
                            resizeMode="cover"
                        />
                    )}
                </View>

                {!isEditing && (
                    <>
                        {isCompletedExercise && (
                            <View className="absolute bottom-0 right-0">
                                <CheckCircleIcon />
                            </View>
                        )}

                        {isCurrentExercise && (
                            <View className="absolute bottom-0 right-0">
                                <PlayCircleIcon />
                            </View>
                        )}
                    </>
                )}
            </TouchableOpacity>

            {isEditing && (
                <View
                    className="absolute top-0 right-0 z-10"
                >
                    <TouchableOpacity onPress={handleRemove}>
                        <RemoveIcon />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default ExerciseItem;