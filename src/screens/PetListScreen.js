// External dependencies
import React from 'react'; // Eliminamos useState y useEffect porque los datos vienen de App.js
import { SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/PetListStyles';

const getSpeciesEmoji = (species) => {
  const emojis = {
    Perro: '🐶',
    Gato: '🐱',
    Pájaro: '🐦',
    Pez: '🐟',
  };
  return emojis[species] || '🐾';
};

// RECIBIMOS pets COMO PROP
const PetListScreen = ({ pets }) => {
  const navigation = useNavigation();

  const handlePetPress = (pet) => {
    navigation.navigate('PetDetail', { pet });
  };

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
        data={pets} // <--- Usa los datos globales
        keyExtractor={(item) => item.id}
        renderItem={renderPetCard}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default PetListScreen;