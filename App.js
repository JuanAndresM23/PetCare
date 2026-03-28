import React,{useState,useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
// Aquí vive la lista inicial
  const [pets, setPets] = useState([
    { id: '1', name: 'Luna', species: 'Perro', breed: 'Labrador', age: '3', weight: '25' },
    { id: '2', name: 'Michi', species: 'Gato', breed: 'Siamés', age: '2', weight: '4' },
  ]);

  // Función para agregar una nueva mascota
  const addPet = (newPet) => {
    const petWithId = { ...newPet, id: Date.now().toString() };
    setPets([...pets, petWithId]);
  };

  // Pasamos la lista y la función al Navigator como "props"
  return <AppNavigator pets={pets} addPet={addPet} />;

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;