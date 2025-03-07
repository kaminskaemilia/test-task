import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FaqIcon from "@/assets/images/faq";
import WarmUpIcon from "@/assets/images/warm-up";
import DocumentIcon from "@/assets/images/document";
import DumbbellIcon from "@/assets/images/dumbbell";

interface WorkoutCardProps {
    name: string;
    gifAssetUrl: string;
    equipment: string;
    onReplace: () => void;
    onInstructionsPress: () => void;
    onWarmUpPress: () => void;
    onFaqPress: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
                                                     name,
                                                     gifAssetUrl,
                                                     equipment,
                                                     onReplace,
                                                     onInstructionsPress,
                                                     onWarmUpPress,
                                                     onFaqPress,
                                                 }) => {
    return (
        <View className="bg-[#FEFEFE] mx-4 rounded-[16px] mb-1">
            <View className="py-4 px-4">
                <View className="flex flex-row items-center justify-between">
                    <Text className="text-2xl font-bold">{name}</Text>
                    <TouchableOpacity
                        className="bg-[#FFE74C] py-2 px-4 rounded-full flex-row items-center"
                        onPress={onReplace}
                    >
                        <Ionicons name="swap-horizontal-outline" size={20} color="#000" />
                        <Text className="ml-1 font-medium">Replace</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="relative w-full h-[220px] bg-[#FEFEFE] items-center justify-center">
                {gifAssetUrl && (
                    <Image
                        source={{ uri: gifAssetUrl }}
                        className="w-full h-full"
                        resizeMode="contain"
                    />
                )}
                <View className="absolute left-6 bottom-2 bg-white flex-row items-center px-[14px] py-[7px] rounded-[24px] shadow">
                    <DumbbellIcon />
                    <Text className="ml-2 text-[#464B50]">{equipment}</Text>
                </View>
            </View>

            <View className="flex-row justify-between px-4 py-4 gap-4">
                <TouchableOpacity
                    className="border border-[#010101] rounded-full py-2 px-4 flex-row items-center flex-1 justify-center"
                    onPress={onInstructionsPress}
                >
                    <DocumentIcon />
                    <Text className="ml-1 font-medium">Instructions</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="border border-[#010101] rounded-full py-2 px-4 flex-row items-center justify-center"
                    onPress={onWarmUpPress}
                >
                    <WarmUpIcon />
                    <Text className="ml-1 font-medium">Warm Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="border border-[#010101] rounded-full py-2 px-4 flex-row items-center justify-center"
                    onPress={onFaqPress}
                >
                    <FaqIcon />
                    <Text className="ml-1 font-medium">FAQ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default WorkoutCard;
