import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 1. Modificamos el Stack para que reciba la lista de mascotas
const PetsStack = ({ pets }) => (
  <Stack.Navigator>
    <Stack.Screen name="PetList" options={{ title: 'Mascotas' }}>
      {(props) => <PetListScreen {...props} pets={pets} />}
    </Stack.Screen>
    <Stack.Screen name="PetDetail" component={PetDetailScreen} />
  </Stack.Navigator>
);

// 2. Modificamos el Navigator principal para recibir los datos de App.js
const AppNavigator = ({ pets, addPet }) => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Mascotas') iconName = 'paw';
          else if (route.name === 'Registrar') iconName = 'add-circle';
          else if (route.name === 'Consejos') iconName = 'bulb';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/* Usamos funciones render para pasar las props a cada pantalla */}
      <Tab.Screen name="Mascotas" options={{ headerShown: false }}>
        {() => <PetsStack pets={pets} />}
      </Tab.Screen>

      <Tab.Screen name="Registrar">
        {(props) => <RegisterPetScreen {...props} addPet={addPet} />}
      </Tab.Screen>

      <Tab.Screen name="Consejos" component={TipsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;