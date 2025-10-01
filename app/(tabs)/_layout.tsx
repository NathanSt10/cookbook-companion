import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs screenOptions={{ headerShown: false }}></Tabs>
      <Tabs.Screen name="home" options={{ title:"Home" }}/>
      <Tabs.Screen name="cookbook" options={{ title:"Cookbook" }}/>
      <Tabs.Screen name="recipe" options={{ title:"Recipes" }}/>
      <Tabs.Screen name="profile" options={{ title:"Profile" }}/>
      <Tabs.Screen name="calendar" options={{ title:"Calendar" }}/>
    </Tabs>
  );
}