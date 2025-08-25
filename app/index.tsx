import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center  bg-[#00abf0]">
      <Text className="text-xl font-bold text-[#081b29]">Edit app/index.tsx to edit this screen.</Text>
      <Text className="text-xl font-bold text-[#081b29]">React expo + NativeWind</Text>
      <TouchableOpacity onPress={()=> router.push('/(tabs)/home')} className="border border-[#081b29] rounded-lg px-3 py-3 my-5">
        <Text className="font-bold">Going to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
