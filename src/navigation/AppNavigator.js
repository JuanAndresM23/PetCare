// External dependencies
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Local screens
import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack navigator for the Pets tab (List + Detail)
const PetsStack = ({ pets }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PetList" options={{ title: 'Mis Mascotas' }}>
        {(props) => <PetListScreen {...props} pets={pets} />}
      </Stack.Screen>
      <Stack.Screen
        name="PetDetail"
        component={PetDetailScreen}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
};

// Main tab navigator
const AppNavigator = () => {
  const [pets, setPets] = useState([]);

  // Adds a new pet to the shared list
  const addPet = (newPet) => {
    const petWithId = { ...newPet, id: Date.now().toString() };
    setPets((prev) => [...prev, petWithId]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Mascotas"
          options={{ headerShown: false }}
        >
          {() => <PetsStack pets={pets} />}
        </Tab.Screen>
        <Tab.Screen name="Registrar">
          {() => <RegisterPetScreen addPet={addPet} />}
        </Tab.Screen>
        <Tab.Screen
          name="Consejos"
          component={TipsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;