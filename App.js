import React,{useState,useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
// Aquí vive la lista inicial
  const [pets, setPets] = useState([
    { id: '1', name: 'Lupe', species: 'Perro', breed: 'chandoso', age: '7', weight: '23' },
    { id: '2', name: 'Zoro', species: 'Gato', breed: 'Criollo', age: '3', weight: '4' },
    { id: '3', name: 'Nyx', species: 'Gato', breed: 'NO SE SABE', age: '5', weight: '9' },
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