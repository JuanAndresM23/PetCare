// External dependencies
import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styles
import styles from '../styles/PetListStyles';

// Initial sample data
const SAMPLE_PETS = [
  { id: '1', name: 'Luna', species: 'Perro', breed: 'Labrador', age: 3, weight: 25 },
  { id: '2', name: 'Michi', species: 'Gato', breed: 'Siamés', age: 2, weight: 4 },
  { id: '3', name: 'Pico', species: 'Pájaro', breed: 'Canario', age: 1, weight: 0.5 },
  { id: '4', name: 'Nemo', species: 'Pez', breed: 'Payaso', age: 1, weight: 0.1 },
  { id: '5', name: 'Rocky', species: 'Perro', breed: 'Bulldog', age: 5, weight: 30 },
];

// Returns an emoji based on the pet species
const getSpeciesEmoji = (species) => {
  const emojis = {
    Perro: '🐶',
    Gato: '🐱',
    Pájaro: '🐦',
    Pez: '🐟',
  };
  return emojis[species] || '🐾';
};

const PetListScreen = () => {
  const navigation = useNavigation();
  const [pets, setPets] = useState([]);

  // Load sample data on mount (simulates an API call)
  useEffect(() => {
    setPets(SAMPLE_PETS);
  }, []);

  // Navigates to PetDetail passing the full pet object
  const handlePetPress = (pet) => {
    navigation.navigate('PetDetail', { pet });
  };

  // Renders a single pet card
  const renderPetCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handlePetPress(item)}
    >
      <Text style={styles.emoji}>{getSpeciesEmoji(item.species)}</Text>
      <Text style={styles.petName}>{item.name}</Text>
      <Text style={styles.petSpecies}>{item.species}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mis Mascotas</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderPetCard}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default PetListScreen;