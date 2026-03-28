// Dependencias externas
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Pantallas locales
import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

// Instancias de los navegadores
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Navegador de pila para la pestaña Mascotas (Lista + Detalle)
const PetsStack = ({ pets }) => {
  return (
    <Stack.Navigator>
      {/* Pantalla principal de la lista de mascotas */}
      <Stack.Screen name="PetList" options={{ title: 'PetCare' }}>
        {(props) => <PetListScreen {...props} pets={pets} />}
      </Stack.Screen>
      {/* Pantalla de detalle de una mascota seleccionada */}
      <Stack.Screen
        name="PetDetail"
        component={PetDetailScreen}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
};

// Navegador principal de pestañas
const AppNavigator = () => {
  // Estado compartido de mascotas entre todas las pantallas
  const [pets, setPets] = useState([]);

  // Agrega una nueva mascota a la lista compartida
  const addPet = (newPet) => {
    // Genera un id único usando la marca de tiempo actual
    const petWithId = { ...newPet, id: Date.now().toString() };
    setPets((prev) => [...prev, petWithId]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Pestaña de lista de mascotas con navegación interna de pila */}
        <Tab.Screen
          name="Mascotas"
          options={{ headerShown: false }}
        >
          {() => <PetsStack pets={pets} />}
        </Tab.Screen>
        {/* Pestaña de registro de nueva mascota */}
        <Tab.Screen name="Registrar">
          {() => <RegisterPetScreen addPet={addPet} />}
        </Tab.Screen>
        {/* Pestaña de consejos de cuidado */}
        <Tab.Screen
          name="Consejos"
          component={TipsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;